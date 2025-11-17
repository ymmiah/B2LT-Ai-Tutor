import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage } from "@google/genai";
import Card from './shared/Card';
import { MicrophoneIcon, StopIcon, SpeechToTextIcon } from './icons';
import { createBlob } from '../utils/audioUtils';

type LiveSession = {
    sendRealtimeInput: (params: { media: any }) => void;
    close: () => void;
};

const AudioTranscription: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [currentTranscription, setCurrentTranscription] = useState<string>('');
    const [finalizedTranscription, setFinalizedTranscription] = useState<string[]>([]);
    const [error, setError] = useState('');

    const sessionPromiseRef = useRef<Promise<LiveSession> | null>(null);
    const inputAudioContextRef = useRef<AudioContext | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
    const transcriptionBufferRef = useRef('');
    
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
        setIsRecording(false);
        if (transcriptionBufferRef.current.trim()) {
            setFinalizedTranscription(prev => [...prev, transcriptionBufferRef.current.trim()]);
        }
        transcriptionBufferRef.current = '';
        setCurrentTranscription('');
    }, []);

    const startRecording = async () => {
        setIsRecording(true);
        setError('');
        setCurrentTranscription('');
        setFinalizedTranscription([]);
        transcriptionBufferRef.current = '';

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            
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
                        if (message.serverContent?.inputTranscription) {
                           transcriptionBufferRef.current += message.serverContent.inputTranscription.text;
                           setCurrentTranscription(transcriptionBufferRef.current);
                        }
                        if (message.serverContent?.turnComplete) {
                            const finalizedText = transcriptionBufferRef.current.trim();
                            if (finalizedText) {
                                setFinalizedTranscription(prev => [...prev, finalizedText]);
                            }
                            transcriptionBufferRef.current = '';
                            setCurrentTranscription('');
                        }
                    },
                    onerror: (e: ErrorEvent) => {
                        console.error('Live session error:', e);
                        setError('An error occurred during transcription. Please try again.');
                        stopRecording();
                    },
                    onclose: () => {
                        // Handled by user action or error
                    },
                },
                config: {
                    // We don't want audio output, but the API requires it. We just won't play it.
                    responseModalities: ['AUDIO'],
                    inputAudioTranscription: {},
                    systemInstruction: 'Only transcribe the user. Do not generate any spoken response.',
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
        <Card title="Audio Transcription" icon={<SpeechToTextIcon />}>
            <p className="mb-4">Practice your pronunciation. Press start, speak into your microphone, and see the live transcription.</p>
            <div className="flex justify-center mb-4">
                {!isRecording ? (
                    <button
                        onClick={startRecording}
                        className="flex items-center space-x-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                    >
                        <MicrophoneIcon />
                        <span>Start Transcribing</span>
                    </button>
                ) : (
                    <button
                        onClick={stopRecording}
                        className="flex items-center space-x-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105"
                    >
                        <StopIcon />
                        <span>Stop Transcribing</span>
                    </button>
                )}
            </div>
            {error && <p className="text-center text-red-500 mb-4">{error}</p>}
            <div className="min-h-[10rem] bg-gray-100 dark:bg-gray-800/50 rounded-md p-4">
                 {finalizedTranscription.map((line, index) => (
                    <p key={index} className="text-gray-500 dark:text-gray-400 mb-2">{line}</p>
                 ))}
                 <p className="text-gray-800 dark:text-gray-200">{currentTranscription}</p>

                {finalizedTranscription.length === 0 && !currentTranscription && !isRecording && (
                    <p className="text-gray-500 text-center">Your transcription will appear here.</p>
                )}
                 {isRecording && !currentTranscription && (
                    <p className="text-gray-500">Listening...</p>
                )}
            </div>
        </Card>
    );
};

export default AudioTranscription;