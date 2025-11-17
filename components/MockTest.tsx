import React, { useState, useEffect, useRef } from 'react';
import { generateMockTest, generateDetailedFeedback, translateQuestion, createChat } from '../services/geminiService';
import { MockQuestion, TestResult, IncorrectQuestionDetail } from '../types';
import Card from './shared/Card';
import Spinner from './shared/Spinner';
import { SparklesIcon, SoundOnIcon, AcademicCapIcon, LanguageIcon, SendIcon, CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon, BookOpenIcon, TrophyIcon } from './icons';
import { generateSpeech } from '../services/geminiService';
import { decode, decodeAudioData } from '../utils/audioUtils';
import { Chat } from '@google/genai';


interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}

const TutorModal = ({ isOpen, onClose, question }: { isOpen: boolean; onClose: () => void; question: MockQuestion | null }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && question) {
            const systemInstruction = `You are an expert AI tutor for the UK citizenship test. A student is asking for help with the following multiple-choice question. Your goal is to guide the student to the correct answer without giving it away directly. Provide hints, explain difficult vocabulary, or ask leading questions to help them reason through the options. Only reveal the correct answer if the student explicitly asks for it or seems completely stuck.

Here is the question context:
- Question: "${question.question}"
- Options: [${question.options.join('", "')}]
- Correct Answer: "${question.correct_answer}"
- Explanation: "${question.explanation}"

Start the conversation by saying "Hello! I see you're looking at this question. What part of it seems tricky?"`;
            
            setChat(createChat(systemInstruction));
            setMessages([]);
        }
    }, [isOpen, question]);
    
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!userInput.trim() || !chat || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const stream = await chat.sendMessageStream({ message: userInput });
            
            let aiResponseText = '';
            setMessages(prev => [...prev, { sender: 'ai', text: '...' }]);

            for await (const chunk of stream) {
                aiResponseText += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { sender: 'ai', text: aiResponseText };
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Tutor chat error:", error);
            setMessages(prev => [...prev, { sender: 'ai', text: 'Sorry, I encountered an error.' }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!isOpen || !question) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl h-[90vh] max-h-[700px] flex flex-col">
                <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex justify-between items-start">
                        <div className="flex-grow">
                             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AI Tutor</h3>
                             <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Question:</strong> {question.question}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 ml-4">&times;</button>
                    </div>
                </div>
                <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                              {msg.text}
                            </div>
                          </div>
                        ))}
                         {isLoading && messages[messages.length - 1]?.sender === 'user' && (
                            <div className="flex justify-start">
                                <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                                  </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-4 border-t dark:border-gray-700">
                    <div className="flex">
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask for a hint..."
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                      />
                      <button
                        onClick={handleSend}
                        disabled={isLoading || !userInput.trim()}
                        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 disabled:bg-gray-400"
                      >
                        <SendIcon className="h-5 w-5" />
                      </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


interface MockTestProps {
  examType: 'B1' | 'Life in the UK';
  onSaveResult: (result: TestResult) => void;
  testHistory: TestResult[];
}

const MockTest: React.FC<MockTestProps> = ({ examType, onSaveResult, testHistory }) => {
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingFor, setSpeakingFor] = useState<string | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [detailedFeedback, setDetailedFeedback] = useState('');
  const [selectedExam, setSelectedExam] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [translatedQuestion, setTranslatedQuestion] = useState<{ question: string; options: string[] } | null>(null);
  const [isTranslated, setIsTranslated] = useState(false);
  const [translationLoading, setTranslationLoading] = useState(false);
  const [translationError, setTranslationError] = useState('');


  const examOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  const resetTestState = () => {
    setQuestions([]);
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setDetailedFeedback('');
    setError('');
    setIsAnswerChecked(false);
    setTranslatedQuestion(null);
    setIsTranslated(false);
    setTranslationError('');
    setTranslationLoading(false);
  };

  const handleSelectExam = async (examNumber: number) => {
    setSelectedExam(examNumber);
    setLoading(true);
    resetTestState();
    try {
      const response = await generateMockTest(examType, examNumber);
      const jsonStr = response.text.trim();
      const data = JSON.parse(jsonStr);
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
      } else {
        setError('Failed to load mock test questions. The generated content was empty.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load or parse the mock test. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleReturnToList = () => {
      resetTestState();
      setSelectedExam(null);
  };


  const handleAnswerSelect = (answer: string) => {
    if(isAnswerChecked) return;
    const currentQuestion = questions[currentQuestionIndex];
    const originalAnswer = isTranslated && translatedQuestion
      ? currentQuestion.options[translatedQuestion.options.indexOf(answer)]
      : answer;

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: originalAnswer,
    });
  };
  
  const handleNext = () => {
    setIsAnswerChecked(false);
    setTranslatedQuestion(null);
    setIsTranslated(false);
    setTranslationError('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        handleSubmit();
    }
  };

  const handlePrevious = () => {
    setIsAnswerChecked(false);
    setTranslatedQuestion(null);
    setIsTranslated(false);
    setTranslationError('');

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmit = async () => {
      let finalScore = 0;
      const incorrectAnswersForFeedback: { question: string; userAnswer: string; correctAnswer: string; explanation: string }[] = [];
      const incorrectQuestionsForHistory: IncorrectQuestionDetail[] = [];

      questions.forEach((q, index) => {
          const userAnswer = selectedAnswers[index];
          if (userAnswer === q.correct_answer) {
              finalScore++;
          } else {
              const incorrectAnswerDetail = {
                  question: q.question,
                  userAnswer: userAnswer || "No answer",
                  correctAnswer: q.correct_answer,
                  explanation: q.explanation,
              };
              incorrectAnswersForFeedback.push(incorrectAnswerDetail);
              incorrectQuestionsForHistory.push({
                  question: q.question,
                  userAnswer: userAnswer || "No answer",
                  correctAnswer: q.correct_answer
              });
          }
      });
      setScore(finalScore);
      setShowResults(true);

      if (selectedExam) {
          onSaveResult({
              examType,
              examNumber: selectedExam,
              score: finalScore,
              totalQuestions: questions.length,
              date: new Date().toISOString(),
              incorrectQuestions: incorrectQuestionsForHistory,
          });
      }

      if (incorrectAnswersForFeedback.length > 0) {
          setFeedbackLoading(true);
          setDetailedFeedback('');
          try {
              const response = await generateDetailedFeedback(incorrectAnswersForFeedback);
              setDetailedFeedback(response.text);
          } catch (err) {
              console.error("Failed to generate detailed feedback:", err);
              setDetailedFeedback("Sorry, we couldn't generate detailed feedback at this time.");
          } finally {
              setFeedbackLoading(false);
          }
      }
  }

  const handleSpeak = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    setSpeakingFor(text);
    try {
      const textToSpeak = text.replace(/______/g, 'dash');
      const response = await generateSpeech(textToSpeak);
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioBuffer = await decodeAudioData(decode(base64Audio), audioContext, 24000, 1);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
        source.onended = () => {
            setIsSpeaking(false);
            setSpeakingFor(null);
        };
      } else {
        setIsSpeaking(false);
        setSpeakingFor(null);
      }
    } catch (error) {
      console.error("Error generating speech:", error);
      setIsSpeaking(false);
      setSpeakingFor(null);
    }
  };

  const handleTranslate = async () => {
      setTranslationError('');
      if (isTranslated) {
          setIsTranslated(false);
          return;
      }
      if (translatedQuestion) {
          setIsTranslated(true);
          return;
      }

      const currentQuestion = questions[currentQuestionIndex];
      const preloadedTranslation = (currentQuestion.translations as any)?.bn;

      if (preloadedTranslation) {
          setTranslatedQuestion(preloadedTranslation);
          setIsTranslated(true);
          return;
      }

      setTranslationLoading(true);
      try {
          const response = await translateQuestion(currentQuestion, 'Bengali');
          const data = JSON.parse(response.text);
          setTranslatedQuestion(data);
          setIsTranslated(true);
      } catch (err) {
          console.error("Translation failed:", err);
          setTranslationError("Translation failed. Please try again.");
      } finally {
          setTranslationLoading(false);
      }
  };
  
  const renderExamSelection = () => {
    const examHistoryMap = new Map<number, TestResult>();
    testHistory
      .filter(t => t.examType === examType)
      .forEach(t => {
        // Keep only the best score for each exam number
        if (!examHistoryMap.has(t.examNumber) || t.score > (examHistoryMap.get(t.examNumber)?.score || 0)) {
          examHistoryMap.set(t.examNumber, t);
        }
      });

    return (
      <div>
        <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Choose a Mock Exam</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {examOptions.map(num => {
            const history = examHistoryMap.get(num);
            const isPassed = history && history.score / history.totalQuestions >= 0.75;

            return (
              <button
                key={num}
                onClick={() => handleSelectExam(num)}
                className="relative flex flex-col items-center justify-center p-4 h-28 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500"
              >
                {history && (
                  <div className={`absolute top-2 right-2 p-1 rounded-full ${isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {isPassed ? <CheckCircleIcon className="h-4 w-4" /> : <XCircleIcon className="h-4 w-4" />}
                  </div>
                )}
                <span className="font-bold text-gray-700 dark:text-gray-300">Exam {num}</span>
                {history && (
                  <span className="text-sm font-semibold mt-1 text-gray-500 dark:text-gray-400">
                    {history.score}/{history.totalQuestions}
                  </span>
                )}
                {!history && <span className="text-sm mt-1 text-gray-400">Not taken</span>}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTest = () => {
    if (questions.length === 0) return null;

    const currentQuestion = questions[currentQuestionIndex];
    const displayQuestion = (isTranslated && translatedQuestion) ? translatedQuestion.question : currentQuestion.question;
    const displayOptions = (isTranslated && translatedQuestion) ? translatedQuestion.options : currentQuestion.options;
    
    return (
      <div>
        <TutorModal 
            isOpen={isTutorOpen}
            onClose={() => setIsTutorOpen(false)}
            question={currentQuestion}
        />
        <div className="mb-4">
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <button onClick={handleReturnToList} className="hover:underline">Exit Test</button>
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
            </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[12rem] flex flex-col justify-center">
            <div className="flex items-start space-x-2">
                <h4 className="text-xl font-semibold mb-4 flex-grow">{displayQuestion}</h4>
                <div className="flex-shrink-0 flex items-center space-x-1">
                    <button 
                      onClick={() => handleSpeak(displayQuestion)} 
                      disabled={isSpeaking}
                      className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
                      aria-label="Read question aloud"
                    >
                      {isSpeaking && speakingFor === displayQuestion ? <Spinner /> : <SoundOnIcon className="h-5 w-5" />}
                    </button>
                    <button
                        onClick={handleTranslate}
                        disabled={translationLoading}
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
                        aria-label={isTranslated ? "Show original language" : "Translate to Bangla"}
                    >
                       <LanguageIcon className="h-5 w-5"/>
                    </button>
                     <button 
                        onClick={() => setIsTutorOpen(true)}
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Ask AI Tutor for help"
                    >
                      <AcademicCapIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
        {translationLoading && <p className="text-sm text-gray-500 text-center my-2">Translating...</p>}
        {translationError && <p className="text-sm text-red-500 text-center my-2">{translationError}</p>}
        
        <div className="space-y-3 mt-6">
          {displayOptions.map((option, index) => {
            const originalOption = currentQuestion.options[index];
            const isSelected = selectedAnswers[currentQuestionIndex] === originalOption;
            const isCorrect = originalOption === currentQuestion.correct_answer;

            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center';

            if (isAnswerChecked) {
              if (isCorrect) {
                buttonClass += ' bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-300 font-semibold';
              } else if (isSelected && !isCorrect) {
                buttonClass += ' bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-300 font-semibold';
              } else {
                buttonClass += ' bg-gray-100 dark:bg-gray-800 border-transparent opacity-60';
              }
            } else {
              buttonClass += ` ${
                isSelected
                  ? 'bg-indigo-100 dark:bg-indigo-900/50 border-indigo-500'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500'
              }`;
            }

            return (
                <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={buttonClass}
                    disabled={isAnswerChecked}
                >
                    <div className="flex-grow">{option}</div>
                    {isAnswerChecked && isCorrect && <CheckCircleIcon className="h-6 w-6 text-green-500 ml-4" />}
                    {isAnswerChecked && isSelected && !isCorrect && <XCircleIcon className="h-6 w-6 text-red-500 ml-4" />}
                </button>
            );
          })}
        </div>

        {isAnswerChecked && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300"><strong>Explanation:</strong> {currentQuestion.explanation}</p>
          </div>
        )}
        
        <div className="mt-6 flex justify-between items-center">
            <button
                onClick={handlePrevious}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 border border-gray-300 dark:border-gray-600 flex items-center"
                disabled={currentQuestionIndex === 0}
            >
                <ChevronLeftIcon className="h-5 w-5 mr-1" /> Previous
            </button>
            <div className="flex justify-end space-x-4">
                {!isAnswerChecked && (
                    <button
                        onClick={() => setIsAnswerChecked(true)}
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 disabled:bg-gray-300 dark:disabled:bg-gray-600"
                        disabled={!selectedAnswers[currentQuestionIndex]}
                    >
                        Check Answer
                    </button>
                )}
                <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 flex items-center">
                    {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'} <ChevronRightIcon className="h-5 w-5 ml-1" />
                </button>
            </div>
        </div>
      </div>
    );
  };
  
  const renderResults = () => {
    const percentage = Math.round((score / questions.length) * 100);
    const isPass = percentage >= 75;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Test Complete!</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">Here's how you did on Mock Exam {selectedExam}</p>
        </div>

        <div className={`p-6 rounded-xl ${isPass ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'} border ${isPass ? 'border-green-300 dark:border-green-700' : 'border-red-300 dark:border-red-700'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className={`text-sm font-semibold uppercase tracking-wider ${isPass ? 'text-green-600' : 'text-red-600'}`}>Your Score</p>
              <p className="text-6xl font-extrabold text-gray-800 dark:text-gray-100">{score}<span className="text-3xl text-gray-500 dark:text-gray-400">/{questions.length}</span></p>
              <p className={`text-2xl font-bold ${isPass ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>{percentage}% - {isPass ? 'Pass' : 'Fail'}</p>
            </div>
            <div className="w-full md:w-auto">
              {score < questions.length && <a href="#feedback" className="w-full md:w-auto block text-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-700">Review Feedback</a>}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Question Review</h4>
          <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            {questions.map((q, index) => (
              <div key={index} className="p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <p className="font-semibold">{index + 1}. {q.question}</p>
                <div className={`mt-2 flex items-center text-sm ${selectedAnswers[index] === q.correct_answer ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedAnswers[index] === q.correct_answer ? <CheckCircleIcon className="h-5 w-5 mr-2"/> : <XCircleIcon className="h-5 w-5 mr-2"/>}
                  Your answer: <span className="font-medium ml-1">{selectedAnswers[index] || "No answer"}</span>
                </div>
                {selectedAnswers[index] !== q.correct_answer && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Correct answer: <span className="font-medium">{q.correct_answer}</span></p>}
              </div>
            ))}
          </div>
        </div>
        
        {score < questions.length && (
          <div id="feedback">
            <h4 className="text-xl font-bold mb-4 flex items-center"><TrophyIcon className="h-6 w-6 mr-2 text-indigo-500"/>Personalized Feedback</h4>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
              {feedbackLoading ? (
                <div className="flex flex-col items-center">
                  <Spinner />
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Generating detailed feedback...</p>
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans" dangerouslySetInnerHTML={{ __html: detailedFeedback.replace(/---/g, '<hr class="my-4 border-gray-200 dark:border-gray-700">').replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') }}>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button onClick={handleReturnToList} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-md hover:bg-indigo-700">
            Return to Exam List
          </button>
        </div>
      </div>
    );
  };
  
  const renderContent = () => {
    if (selectedExam === null) {
      return renderExamSelection();
    }
    if (loading) {
      return <div className="flex justify-center items-center h-64"><Spinner /></div>;
    }
    if (error) {
      return (
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button onClick={handleReturnToList} className="mt-4 bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700">
            Go Back
          </button>
        </div>
      );
    }
    if (showResults) {
      return renderResults();
    }
    if (questions.length > 0) {
      return renderTest();
    }
    return null;
  }


  return (
    <Card title={`${examType} Mock Test`} icon={<BookOpenIcon />}>
        {renderContent()}
    </Card>
  );
};

export default MockTest;