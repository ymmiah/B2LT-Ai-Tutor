
import React, { useState, useEffect, useRef } from 'react';
import { TestResult, IncorrectQuestionDetail, SavedQuestion } from '../types';
import ConversationalPractice from './ConversationalPractice';
import Card from './shared/Card';
import Spinner from './shared/Spinner';
import { 
    generateB1Reading, 
    generateB1WritingPrompt, 
    evaluateB1Writing, 
    generateB1Listening, 
    generateSpeech, 
    generateStudyPlan,
    translateContent
} from '../services/geminiService';
import { decode, decodeAudioData } from '../utils/audioUtils';
import { 
    BookOpenIcon, 
    PenToolIcon, 
    HeadphonesIcon, 
    MicrophoneIcon, 
    CalendarIcon, 
    InfoIcon, 
    ClipboardListIcon,
    SoundOnIcon, 
    CheckCircleIcon, 
    ClockIcon,
    SendIcon,
    TrophyIcon,
    LanguageIcon,
    HeartIcon
} from './icons';

interface B1PrepProps {
    onSaveResult: (result: TestResult) => void;
    testHistory: TestResult[];
    favorites: SavedQuestion[];
    onToggleFavorite: (q: SavedQuestion) => void;
}

// Helper to clean potential markdown from JSON strings
const safeJSONParse = (str: string) => {
    try {
        const clean = str.replace(/```json\s*|\s*```/g, '').trim();
        return JSON.parse(clean);
    } catch (e) {
        console.error("JSON Parse Error", e);
        return null;
    }
};

// --- SUB-COMPONENTS ---

const B1Overview: React.FC = () => (
    <div className="space-y-6 animate-fadeIn">
        <Card title="B1 Exam Overview" icon={<InfoIcon />}>
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p>The B1 English exam (SELT - Secure English Language Test) is a requirement for UK Citizenship (Naturalisation) and Indefinite Leave to Remain (Settlement).</p>
                
                <h4 className="font-bold mt-4">Structure</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Topic Phase (5 minutes):</strong> You choose a topic in advance to discuss with the examiner.</li>
                    <li><strong>Conversation Phase (5 minutes):</strong> A conversation about two subjects selected by the examiner from a list (e.g., Festivals, Means of Transport, Special Occasions, Entertainment, Music).</li>
                </ul>

                <h4 className="font-bold mt-4">Key Requirements</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li>You must communicate clearly and be understood.</li>
                    <li>Use correct grammar for the B1 level (e.g., past, present, and future tenses).</li>
                    <li>Respond to questions and initiate conversation.</li>
                </ul>

                <h4 className="font-bold mt-4 text-indigo-600 dark:text-indigo-400">Booking & Rules</h4>
                <p>You must book your test at an approved SELT center (e.g., Trinity College London, IELTS Life Skills, LanguageCert). You will need a valid photo ID (Passport or Biometric Residence Permit) on the day.</p>
                
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h5 className="font-bold text-yellow-800 dark:text-yellow-200">Exemptions</h5>
                    <p className="text-sm">You may be exempt if you are aged 65 or over, or have a physical or mental condition that prevents you from taking the exam. Check the official Home Office guidance for details.</p>
                </div>
            </div>
        </Card>
    </div>
);

interface IncorrectDetail {
    question: string;
    userAnswer: string;
    correctAnswer: string;
}

interface B1ReadingProps {
    onComplete?: (score: number, total: number, incorrect: IncorrectDetail[]) => void;
    favorites?: SavedQuestion[];
    onToggleFavorite?: (q: SavedQuestion) => void;
}

const B1Reading: React.FC<B1ReadingProps> = ({ onComplete, favorites = [], onToggleFavorite }) => {
    const [data, setData] = useState<{ title: string, passage: string, questions: any[] } | null>(null);
    const [translatedData, setTranslatedData] = useState<{ title: string, passage: string, questions: any[] } | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
    const [submitted, setSubmitted] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);
    const [translating, setTranslating] = useState(false);

    const loadExercise = async () => {
        setLoading(true);
        setSubmitted(false);
        setSelectedAnswers({});
        setTranslatedData(null);
        setShowTranslation(false);
        try {
            const res = await generateB1Reading();
            const json = safeJSONParse(res.text);
            if (json) setData(json);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleTranslate = async () => {
        if (showTranslation) {
            setShowTranslation(false);
            return;
        }
        if (translatedData) {
            setShowTranslation(true);
            return;
        }
        if (!data) return;

        setTranslating(true);
        try {
            const res = await translateContent(data);
            const json = safeJSONParse(res);
            if (json) {
                setTranslatedData(json);
                setShowTranslation(true);
            }
        } catch (e) {
            console.error("Translation failed", e);
        } finally {
            setTranslating(false);
        }
    };

    useEffect(() => { loadExercise(); }, []);

    const handleSubmit = () => {
        setSubmitted(true);
        if (data && onComplete) {
            let score = 0;
            const incorrect: IncorrectDetail[] = [];
            data.questions.forEach((q, i) => {
                const userAns = selectedAnswers[i];
                if (userAns === q.answer) {
                    score++;
                } else {
                    incorrect.push({
                        question: q.question,
                        userAnswer: userAns || "No Answer",
                        correctAnswer: q.answer
                    });
                }
            });
            onComplete(score, data.questions.length, incorrect);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Spinner /></div>;
    if (!data) return <div className="text-center p-8"><p>Failed to load content.</p><button onClick={loadExercise} className="mt-2 text-indigo-600">Retry</button></div>;

    const displayData = showTranslation && translatedData ? translatedData : data;

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 relative">
                <button 
                    onClick={handleTranslate} 
                    disabled={translating}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                    title="Translate to Bangla"
                >
                    {translating ? <Spinner /> : <LanguageIcon className={`h-5 w-5 ${showTranslation ? 'text-indigo-600' : ''}`} />}
                </button>
                <h3 className="text-xl font-bold mb-3">{displayData.title}</h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
                    {displayData.passage}
                </div>
            </div>

            <div className="space-y-4">
                {displayData.questions.map((q, idx) => {
                    // Map translated index to original data for saving favorite
                    const originalQ = data.questions[idx];
                    const isFavorited = favorites.some(fav => fav.question === originalQ.question);

                    return (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 relative">
                             {onToggleFavorite && (
                                <button 
                                    onClick={() => onToggleFavorite({
                                        id: btoa(originalQ.question), // Generate a pseudo ID
                                        section: 'B1',
                                        question: originalQ.question,
                                        options: originalQ.options,
                                        correctAnswer: originalQ.answer,
                                        explanation: "Check passage for context.",
                                        context: data.passage,
                                        dateSaved: new Date().toISOString()
                                    })}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                                >
                                    <HeartIcon className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                                </button>
                            )}
                            <p className="font-semibold mb-3 pr-8">{idx + 1}. {q.question}</p>
                            <div className="space-y-2">
                                {q.options.map((opt: string, optIdx: number) => {
                                    // Need to match selected answer (which is from original data) to translated options
                                    // Assuming options order is preserved
                                    const originalOpt = originalQ.options[optIdx];
                                    const isSelected = selectedAnswers[idx] === originalOpt;
                                    const isCorrect = originalOpt === originalQ.answer;
                                    
                                    let btnClass = "w-full text-left px-4 py-2 rounded border transition-colors ";
                                    
                                    if (submitted) {
                                        if (isCorrect) btnClass += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-200 ";
                                        else if (isSelected && !isCorrect) btnClass += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-200 ";
                                        else btnClass += "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-50 ";
                                    } else {
                                        btnClass += isSelected ? "bg-indigo-100 border-indigo-500 dark:bg-indigo-900/50 " : "bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 ";
                                    }

                                    return (
                                        <button 
                                            key={optIdx} 
                                            onClick={() => !submitted && setSelectedAnswers(prev => ({...prev, [idx]: originalOpt}))}
                                            className={btnClass}
                                        >
                                            {opt}
                                            {submitted && isCorrect && <CheckCircleIcon className="inline h-4 w-4 ml-2 text-green-600"/>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between">
                <button onClick={loadExercise} className="text-gray-500 hover:text-indigo-600 font-medium">Load New Passage</button>
                {!submitted && (
                    <button 
                        onClick={handleSubmit}
                        disabled={Object.keys(selectedAnswers).length < data.questions.length}
                        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                    >
                        Check Answers
                    </button>
                )}
            </div>
        </div>
    );
};

interface B1ListeningProps {
    onComplete?: (score: number, total: number, incorrect: IncorrectDetail[]) => void;
    favorites?: SavedQuestion[];
    onToggleFavorite?: (q: SavedQuestion) => void;
}

const B1Listening: React.FC<B1ListeningProps> = ({ onComplete, favorites = [], onToggleFavorite }) => {
    const [data, setData] = useState<{ script: string, questions: any[] } | null>(null);
    const [translatedData, setTranslatedData] = useState<{ script: string, questions: any[] } | null>(null);
    const [loading, setLoading] = useState(false);
    const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
    const [submitted, setSubmitted] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);
    const [translating, setTranslating] = useState(false);
    
    // Persistent AudioContext to prevent memory leaks
    const audioCtxRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Initialize AudioContext once on mount
        const CtxClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new CtxClass();
        
        return () => {
            // Cleanup on unmount
            if (audioCtxRef.current) {
                audioCtxRef.current.close();
            }
        };
    }, []);

    const loadExercise = async () => {
        setLoading(true);
        setSubmitted(false);
        setSelectedAnswers({});
        setAudioBuffer(null);
        setTranslatedData(null);
        setShowTranslation(false);
        try {
            const res = await generateB1Listening();
            const json = safeJSONParse(res.text);
            if (json) {
                setData(json);
                // Generate Audio
                const speechRes = await generateSpeech(json.script);
                const base64 = speechRes.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
                if (base64 && audioCtxRef.current) {
                    // Reuse the single context for decoding
                    const buffer = await decodeAudioData(decode(base64), audioCtxRef.current, 24000, 1);
                    setAudioBuffer(buffer);
                }
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleTranslate = async () => {
        if (showTranslation) {
            setShowTranslation(false);
            return;
        }
        if (translatedData) {
            setShowTranslation(true);
            return;
        }
        if (!data) return;

        setTranslating(true);
        try {
            const res = await translateContent(data);
            const json = safeJSONParse(res);
            if (json) {
                setTranslatedData(json);
                setShowTranslation(true);
            }
        } catch (e) {
            console.error("Translation failed", e);
        } finally {
            setTranslating(false);
        }
    };

    useEffect(() => { loadExercise(); }, []);

    const playAudio = () => {
        if (!audioBuffer || isPlaying || !audioCtxRef.current) return;
        
        // If context was suspended (browser policy), resume it
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }

        setIsPlaying(true);
        const source = audioCtxRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtxRef.current.destination);
        source.start();
        source.onended = () => setIsPlaying(false);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        if (data && onComplete) {
            let score = 0;
            const incorrect: IncorrectDetail[] = [];
            data.questions.forEach((q, i) => {
                const userAns = selectedAnswers[i];
                if (userAns === q.answer) {
                    score++;
                } else {
                     incorrect.push({
                        question: q.question,
                        userAnswer: userAns || "No Answer",
                        correctAnswer: q.answer
                    });
                }
            });
            onComplete(score, data.questions.length, incorrect);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Spinner /></div>;
    if (!data) return <div className="text-center p-8"><p>Failed to load content.</p><button onClick={loadExercise} className="mt-2 text-indigo-600">Retry</button></div>;

    const displayData = showTranslation && translatedData ? translatedData : data;

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center py-12 relative">
                 <button 
                    onClick={handleTranslate} 
                    disabled={translating}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                    title="Translate to Bangla"
                >
                    {translating ? <Spinner /> : <LanguageIcon className={`h-5 w-5 ${showTranslation ? 'text-indigo-600' : ''}`} />}
                </button>
                <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-full mb-4">
                    <HeadphonesIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Audio Clip Ready</h3>
                <button 
                    onClick={playAudio} 
                    disabled={!audioBuffer || isPlaying}
                    className="flex items-center bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 disabled:opacity-50 transition-transform transform hover:scale-105"
                >
                    {isPlaying ? <span className="flex items-center"><Spinner /> Playing...</span> : <span className="flex items-center"><SoundOnIcon className="mr-2" /> Play Audio</span>}
                </button>
                {submitted && (
                     <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded text-sm text-gray-600 dark:text-gray-400 italic border-l-4 border-gray-400">
                        <strong>Transcript:</strong> {displayData.script}
                     </div>
                )}
            </div>

            <div className="space-y-4">
                {displayData.questions.map((q, idx) => {
                     // Map translated index to original data for saving favorite
                    const originalQ = data.questions[idx];
                    const isFavorited = favorites.some(fav => fav.question === originalQ.question);

                    return (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 relative">
                            {onToggleFavorite && (
                                <button 
                                    onClick={() => onToggleFavorite({
                                        id: btoa(originalQ.question),
                                        section: 'B1',
                                        question: originalQ.question,
                                        options: originalQ.options,
                                        correctAnswer: originalQ.answer,
                                        explanation: "Audio Script: " + data.script,
                                        context: data.script,
                                        dateSaved: new Date().toISOString()
                                    })}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                                >
                                    <HeartIcon className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                                </button>
                            )}
                            <p className="font-semibold mb-3 pr-8">{idx + 1}. {q.question}</p>
                            <div className="space-y-2">
                                {q.options.map((opt: string, optIdx: number) => {
                                    const originalOpt = originalQ.options[optIdx];
                                    const isSelected = selectedAnswers[idx] === originalOpt;
                                    const isCorrect = originalOpt === originalQ.answer;

                                    let btnClass = "w-full text-left px-4 py-2 rounded border transition-colors ";
                                    
                                    if (submitted) {
                                        if (isCorrect) btnClass += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-200 ";
                                        else if (isSelected && !isCorrect) btnClass += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-200 ";
                                        else btnClass += "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-50 ";
                                    } else {
                                        btnClass += isSelected ? "bg-indigo-100 border-indigo-500 dark:bg-indigo-900/50 " : "bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 ";
                                    }

                                    return (
                                        <button 
                                            key={optIdx} 
                                            onClick={() => !submitted && setSelectedAnswers(prev => ({...prev, [idx]: originalOpt}))}
                                            className={btnClass}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between">
                 <button onClick={loadExercise} className="text-gray-500 hover:text-indigo-600 font-medium">New Audio Task</button>
                {!submitted && (
                    <button 
                        onClick={handleSubmit}
                        disabled={Object.keys(selectedAnswers).length < data.questions.length}
                        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                    >
                        Check Answers
                    </button>
                )}
            </div>
        </div>
    );
};

const B1Writing: React.FC<{ onComplete?: (score: number) => void }> = ({ onComplete }) => {
    const [prompt, setPrompt] = useState('');
    const [translatedPrompt, setTranslatedPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [feedback, setFeedback] = useState('');
    const [translatedFeedback, setTranslatedFeedback] = useState('');
    const [score, setScore] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [evaluating, setEvaluating] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);
    const [translating, setTranslating] = useState(false);

    const loadPrompt = async () => {
        setLoading(true);
        setResponse('');
        setFeedback('');
        setTranslatedFeedback('');
        setTranslatedPrompt('');
        setScore(null);
        setShowTranslation(false);
        try {
            const txt = await generateB1WritingPrompt();
            setPrompt(txt);
        } catch (e) { console.error(e); } 
        finally { setLoading(false); }
    };

    useEffect(() => { loadPrompt(); }, []);

    const handleTranslate = async () => {
        if (showTranslation) {
            setShowTranslation(false);
            return;
        }
        
        setTranslating(true);
        try {
            if (!translatedPrompt) {
                const tPrompt = await translateContent(prompt);
                setTranslatedPrompt(tPrompt);
            }
            if (feedback && !translatedFeedback) {
                const tFeedback = await translateContent(feedback);
                setTranslatedFeedback(tFeedback);
            }
            setShowTranslation(true);
        } catch (e) { console.error(e); }
        finally { setTranslating(false); }
    };

    const handleSubmit = async () => {
        if (!response.trim()) return;
        setEvaluating(true);
        try {
            const resText = await evaluateB1Writing(prompt, response);
            const res = safeJSONParse(resText);
            if (res) {
                setFeedback(res.feedback);
                setScore(res.score);
                // Reset translation if new feedback comes
                setTranslatedFeedback('');
                if(showTranslation) setShowTranslation(false); 
                if (onComplete) onComplete(res.score); 
            }
        } catch (e) { console.error(e); }
        finally { setEvaluating(false); }
    };

    if (loading) return <div className="flex justify-center p-8"><Spinner /></div>;

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 border-l-4 border-l-indigo-500 relative">
                <button 
                    onClick={handleTranslate} 
                    disabled={translating}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                    title="Translate to Bangla"
                >
                    {translating ? <Spinner /> : <LanguageIcon className={`h-5 w-5 ${showTranslation ? 'text-indigo-600' : ''}`} />}
                </button>
                <h4 className="text-sm font-bold text-indigo-500 uppercase mb-1">Writing Task</h4>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {showTranslation && translatedPrompt ? translatedPrompt : prompt}
                </p>
            </div>

            <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your answer here (approx 100 words)..."
                className="w-full h-40 p-4 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                disabled={!!feedback}
            />

            {!feedback && (
                <div className="flex justify-end">
                    <button 
                        onClick={handleSubmit}
                        disabled={evaluating || !response}
                        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center"
                    >
                        {evaluating ? <Spinner /> : <><SendIcon className="h-4 w-4 mr-2"/> Submit for Feedback</>}
                    </button>
                </div>
            )}

            {feedback && (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700 animate-fadeIn">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-green-800 dark:text-green-300 flex items-center"><CheckCircleIcon className="mr-2 h-5 w-5"/> AI Feedback</h4>
                        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{score}/10</span>
                    </div>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: (showTranslation && translatedFeedback ? translatedFeedback : feedback) }} />
                    </div>
                    <button onClick={loadPrompt} className="mt-6 w-full py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                        Try Another Task
                    </button>
                </div>
            )}
        </div>
    );
};

const B1StudyPlan: React.FC = () => {
    const [ratings, setRatings] = useState({ reading: 3, writing: 3, listening: 3, speaking: 3 });
    const [plan, setPlan] = useState('');
    const [translatedPlan, setTranslatedPlan] = useState('');
    const [loading, setLoading] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);
    const [translating, setTranslating] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setTranslatedPlan('');
        setShowTranslation(false);
        try {
            const res = await generateStudyPlan(ratings);
            setPlan(res);
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };
    
    const handleTranslate = async () => {
        if (showTranslation) {
            setShowTranslation(false);
            return;
        }
        if(translatedPlan) {
            setShowTranslation(true);
            return;
        }
        setTranslating(true);
        try {
            const res = await translateContent(plan);
            setTranslatedPlan(res);
            setShowTranslation(true);
        } catch (e) { console.error(e); }
        finally { setTranslating(false); }
    }

    const RatingInput = ({ label, field }: { label: string, field: keyof typeof ratings }) => (
        <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">{label} (1-5)</label>
            <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(num => (
                    <button 
                        key={num}
                        onClick={() => setRatings(prev => ({...prev, [field]: num}))}
                        className={`w-10 h-10 rounded-full font-bold transition-colors ${ratings[field] === num ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fadeIn">
            {!plan && (
                <Card title="Create Your Personalized Study Plan" icon={<CalendarIcon />}>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">Rate your current confidence level in each skill to get a tailored 7-day schedule.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <RatingInput label="Reading" field="reading" />
                        <RatingInput label="Writing" field="writing" />
                        <RatingInput label="Listening" field="listening" />
                        <RatingInput label="Speaking" field="speaking" />
                    </div>
                    <button 
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 flex justify-center items-center"
                    >
                        {loading ? <Spinner /> : 'Generate Plan'}
                    </button>
                </Card>
            )}

            {plan && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative">
                    <button 
                        onClick={handleTranslate} 
                        disabled={translating}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                        title="Translate to Bangla"
                    >
                        {translating ? <Spinner /> : <LanguageIcon className={`h-5 w-5 ${showTranslation ? 'text-indigo-600' : ''}`} />}
                    </button>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Your 7-Day Plan</h3>
                        <button onClick={() => setPlan('')} className="text-sm text-indigo-600 hover:underline">Start Over</button>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: (showTranslation && translatedPlan ? translatedPlan : plan).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                    </div>
                </div>
            )}
        </div>
    );
};

const B1MockExam: React.FC<{ onSaveResult: (res: TestResult) => void }> = ({ onSaveResult }) => {
    const [stage, setStage] = useState<'start' | 'reading' | 'writing' | 'listening' | 'finish'>('start');
    const [scores, setScores] = useState({ reading: 0, listening: 0, writing: 0 });
    const [totalQs, setTotalQs] = useState({ reading: 0, listening: 0 });
    const [incorrectQuestions, setIncorrectQuestions] = useState<IncorrectQuestionDetail[]>([]);

    const startExam = () => {
        setStage('reading');
        setIncorrectQuestions([]);
    };

    const finishExam = (finalWritingScore: number) => {
        const finalScores = { ...scores, writing: finalWritingScore };
        setScores(finalScores);
        
        const totalScore = finalScores.reading + finalScores.listening + finalWritingScore;
        const totalQuestions = totalQs.reading + totalQs.listening + 1; // +1 writing task

        // Save result
        onSaveResult({
            examType: 'B1',
            examNumber: Math.floor(Date.now() / 1000), // Unique ID
            score: totalScore,
            totalQuestions: totalQuestions,
            date: new Date().toISOString(),
            incorrectQuestions: incorrectQuestions
        });
        setStage('finish');
    };

    const addIncorrect = (newIncorrect: IncorrectDetail[]) => {
        setIncorrectQuestions(prev => [...prev, ...newIncorrect]);
    };

    if (stage === 'start') {
        return (
            <div className="text-center py-12 space-y-6">
                <div className="mx-auto w-20 h-20 bg-indigo-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-indigo-600">
                    <ClipboardListIcon className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold">Full B1 Mock Simulation</h2>
                <p className="max-w-md mx-auto text-gray-600 dark:text-gray-400">
                    This simulation will take you through Reading, Listening, and Writing sections. It is timed and automatically scored.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm font-semibold text-gray-500">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">Reading</div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">Listening</div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">Writing</div>
                </div>
                <button onClick={startExam} className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-full hover:bg-indigo-700 shadow-lg transform transition hover:-translate-y-1">
                    Start Exam
                </button>
            </div>
        );
    }

    if (stage === 'finish') {
        const percentage = Math.round(((scores.reading + scores.listening + scores.writing) / (totalQs.reading + totalQs.listening + 10)) * 100) || 0;
        return (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
                <TrophyIcon className="h-20 w-20 mx-auto text-yellow-500" />
                <h2 className="text-3xl font-bold">Exam Complete!</h2>
                <p className="text-xl">You scored approx. <span className="font-bold text-indigo-600">{percentage}%</span></p>
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-6">
                     <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                        <p className="text-xs text-gray-500 uppercase">Reading</p>
                        <p className="text-xl font-bold">{scores.reading}/{totalQs.reading}</p>
                     </div>
                     <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                        <p className="text-xs text-gray-500 uppercase">Listening</p>
                        <p className="text-xl font-bold">{scores.listening}/{totalQs.listening}</p>
                     </div>
                     <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                        <p className="text-xs text-gray-500 uppercase">Writing</p>
                        <p className="text-xl font-bold">{scores.writing}/10</p>
                     </div>
                </div>
                <button onClick={() => setStage('start')} className="mt-8 text-indigo-600 font-semibold hover:underline">Return to Start</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="font-bold text-lg uppercase tracking-wider text-gray-500">{stage} Section</div>
                <div className="flex items-center text-red-500 font-mono">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>Timed Mode</span>
                </div>
            </div>

            {stage === 'reading' && (
                <B1Reading onComplete={(s, t, incorrect) => {
                    setScores(p => ({...p, reading: s}));
                    setTotalQs(p => ({...p, reading: t}));
                    addIncorrect(incorrect);
                    setStage('listening');
                }} />
            )}
            {stage === 'listening' && (
                <B1Listening onComplete={(s, t, incorrect) => {
                    setScores(p => ({...p, listening: s}));
                    setTotalQs(p => ({...p, listening: t}));
                    addIncorrect(incorrect);
                    setStage('writing');
                }} />
            )}
            {stage === 'writing' && (
                <B1Writing onComplete={(s) => {
                    finishExam(s);
                }} />
            )}
        </div>
    );
}

// --- MAIN COMPONENT ---

const B1Prep: React.FC<B1PrepProps> = ({ onSaveResult, testHistory, favorites, onToggleFavorite }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'reading' | 'listening' | 'writing' | 'speaking' | 'mock' | 'plan'>('overview');

    const TabButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === id 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
            }`}
        >
            <Icon className={`h-4 w-4 mr-2 ${activeTab === id ? 'text-indigo-500' : 'text-gray-400'}`} />
            {label}
        </button>
    );

    return (
        <div className="flex flex-col h-full space-y-6">
            <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">B1 Exam Preparation</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Comprehensive practice for all 4 skills.</p>
            </header>

            {/* Navigation */}
            <div className="flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-900/50 rounded-xl overflow-x-auto">
                <TabButton id="overview" label="Overview" icon={InfoIcon} />
                <TabButton id="plan" label="Study Plan" icon={CalendarIcon} />
                <TabButton id="reading" label="Reading" icon={BookOpenIcon} />
                <TabButton id="writing" label="Writing" icon={PenToolIcon} />
                <TabButton id="listening" label="Listening" icon={HeadphonesIcon} />
                <TabButton id="speaking" label="Speaking" icon={MicrophoneIcon} />
                <TabButton id="mock" label="Mock Exam" icon={ClipboardListIcon} />
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-[500px]">
                {activeTab === 'overview' && <B1Overview />}
                {activeTab === 'plan' && <B1StudyPlan />}
                {activeTab === 'reading' && <B1Reading favorites={favorites} onToggleFavorite={onToggleFavorite} />}
                {activeTab === 'writing' && <B1Writing />}
                {activeTab === 'listening' && <B1Listening favorites={favorites} onToggleFavorite={onToggleFavorite} />}
                {activeTab === 'speaking' && <ConversationalPractice />}
                {activeTab === 'mock' && <B1MockExam onSaveResult={onSaveResult} />}
            </div>
        </div>
    );
};

export default B1Prep;
