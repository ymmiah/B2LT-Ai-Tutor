import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage } from "@google/genai";
import Card from './shared/Card';
import { MicrophoneIcon, StopIcon } from './icons';
import { createBlob, decode, decodeAudioData } from '../utils/audioUtils';

// Define the Session type, which is not exported from the SDK
type LiveSession = {
    sendRealtimeInput: (params: { media: any }) => void;
    close: () => void;
};

const ConversationalPractice: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState<string[]>([]);
    const [error, setError] = useState('');
    const sessionPromiseRef = useRef<Promise<LiveSession> | null>(null);
    const inputAudioContextRef = useRef<AudioContext | null>(null);
    const outputAudioContextRef = useRef<AudioContext | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);

    const nextStartTimeRef = useRef(0);
    const audioSourcesRef = useRef(new Set<AudioBufferSourceNode>());

    const currentInputTranscriptionRef = useRef('');
    const currentOutputTranscriptionRef = useRef('');

    const stopRecording = useCallback(() => {
        if (sessionPromiseRef.current) {
            sessionPromiseRef.current.then(session => session.close());
            sessionPromiseRef.current = null;
        }
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
            mediaStreamRef.current = null;
        }
        if (scriptProcessorRef.current) {
            scriptProcessorRef.current.disconnect();
            scriptProcessorRef.current = null;
        }
        if (inputAudioContextRef.current && inputAudioContextRef.current.state !== 'closed') {
            inputAudioContextRef.current.close();
            inputAudioContextRef.current = null;
        }
        if (outputAudioContextRef.current && outputAudioContextRef.current.state !== 'closed') {
            outputAudioContextRef.current.close();
            outputAudioContextRef.current = null;
        }
        setIsRecording(false);
    }, []);

    const startRecording = async () => {
        setIsRecording(true);
        setError('');
        setTranscription([]);
        currentInputTranscriptionRef.current = '';
        currentOutputTranscriptionRef.current = '';
        nextStartTimeRef.current = 0;
        audioSourcesRef.current.clear();

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            
            sessionPromiseRef.current = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-09-2025',
                callbacks: {
                    onopen: () => {
                        if (!inputAudioContextRef.current || !mediaStreamRef.current) return;
                        const source = inputAudioContextRef.current.createMediaStreamSource(mediaStreamRef.current);
                        const scriptProcessor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
                        scriptProcessorRef.current = scriptProcessor;

                        scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                            const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                            const pcmBlob = createBlob(inputData);
                            sessionPromiseRef.current?.then((session) => {
                                session.sendRealtimeInput({ media: pcmBlob });
                            });
                        };
                        source.connect(scriptProcessor);
                        scriptProcessor.connect(inputAudioContextRef.current.destination);
                    },
                    onmessage: async (message: LiveServerMessage) => {
                        if (message.serverContent?.outputTranscription) {
                            currentOutputTranscriptionRef.current += message.serverContent.outputTranscription.text;
                        }
                        if (message.serverContent?.inputTranscription) {
                            currentInputTranscriptionRef.current += message.serverContent.inputTranscription.text;
                        }

                        if (message.serverContent?.turnComplete) {
                            const userInput = currentInputTranscriptionRef.current.trim();
                            const modelOutput = currentOutputTranscriptionRef.current.trim();
                            
                            setTranscription(prev => [
                                ...(userInput ? [`You: ${userInput}`] : []),
                                ...(modelOutput ? [`AI: ${modelOutput}`] : []),
                                ...prev
                            ]);

                            currentInputTranscriptionRef.current = '';
                            currentOutputTranscriptionRef.current = '';
                        }
                        
                        const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
                        if (base64Audio && outputAudioContextRef.current) {
                            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
                            const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContextRef.current, 24000, 1);
                            const source = outputAudioContextRef.current.createBufferSource();
                            source.buffer = audioBuffer;
                            source.connect(outputAudioContextRef.current.destination);
                            
                            source.addEventListener('ended', () => {
                                audioSourcesRef.current.delete(source);
                            });

                            source.start(nextStartTimeRef.current);
                            nextStartTimeRef.current += audioBuffer.duration;
                            audioSourcesRef.current.add(source);
                        }

                        if (message.serverContent?.interrupted) {
                            for (const source of audioSourcesRef.current.values()) {
                                source.stop();
                                audioSourcesRef.current.delete(source);
                            }
                            nextStartTimeRef.current = 0;
                        }
                    },
                    onerror: (e: ErrorEvent) => {
                        console.error('Live session error:', e);
                        setError('An error occurred during the session. Please try again.');
                        stopRecording();
                    },
                    onclose: () => {
                        // Handled by user action or error
                    },
                },
                config: {
                    responseModalities: ['AUDIO'],
                    speechConfig: {
                        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
                    },
                    systemInstruction: 'You are a friendly B1 English exam practice partner. Ask the user simple questions about their day, hobbies, or family to get them talking.',
                    inputAudioTranscription: {},
                    outputAudioTranscription: {},
                },
            });
        } catch (err) {
            console.error('Failed to start recording:', err);
            setError('Could not access microphone. Please check your permissions.');
            setIsRecording(false);
        }
    };

    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, [stopRecording]);

    return (
        <Card title="Conversational Practice" icon={<MicrophoneIcon />}>
            <p className="mb-4">Practice your speaking and listening skills. Press start and have a conversation with the AI.</p>
            <div className="flex justify-center mb-4">
                {!isRecording ? (
                    <button
                        onClick={startRecording}
                        className="flex items-center space-x-2 bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                    >
                        <MicrophoneIcon />
                        <span>Start Practice</span>
                    </button>
                ) : (
                    <button
                        onClick={stopRecording}
                        className="flex items-center space-x-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105"
                    >
                        <StopIcon />
                        <span>Stop Practice</span>
                    </button>
                )}
            </div>
            {error && <p className="text-center text-red-500 mb-4">{error}</p>}
            <div className="h-64 bg-gray-100 dark:bg-gray-800/50 rounded-md p-4 overflow-y-auto flex flex-col-reverse">
                {transcription.length === 0 && !isRecording && (
                    <p className="text-gray-500 text-center self-center">Your conversation will appear here.</p>
                )}
                {isRecording && transcription.length === 0 &&(
                    <p className="text-gray-500 text-center self-center">Listening...</p>
                )}
                <div className="space-y-2">
                    {transcription.map((line, index) => (
                        <p key={index} className={line.startsWith('You:') ? 'text-right' : 'text-left'}>
                            <span className={`inline-block p-2 px-3 rounded-lg ${line.startsWith('You:') ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                {line}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ConversationalPractice;