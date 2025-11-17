import React, { useMemo, useState } from 'react';
import { UserProgressData, TestResult, IncorrectQuestionDetail } from '../types';
import Card from './shared/Card';
import { UserIcon, BookOpenIcon, StarIcon, TrophyIcon, BadgeCheckIcon, TrendingDownIcon, AcademicCapIcon, LandmarkIcon } from './icons';

interface ProfileProps {
    userEmail: string;
    userProgress: UserProgressData | null;
    onLogout: () => void;
    pointsPerLevel: number;
}

const iconMap: { [key: string]: React.ElementType } = {
  BookOpenIcon,
  StarIcon,
  TrophyIcon,
  BadgeCheckIcon,
};

type AnalysisData = {
    accuracy: number;
    totalAnswered: number;
    totalCorrect: number;
    problemAreas: {
        question: string;
        count: number;
        correctAnswer: string;
    }[];
};

const PerformanceAnalysis: React.FC<{ testHistory: TestResult[] }> = ({ testHistory }) => {
    const [activeTab, setActiveTab] = useState<'B1' | 'Life in the UK'>('Life in the UK');

    const analysisData = useMemo((): AnalysisData => {
        const relevantTests = testHistory.filter(t => t.examType === activeTab);
        if (relevantTests.length === 0) {
            return { accuracy: 0, totalAnswered: 0, totalCorrect: 0, problemAreas: [] };
        }

        let totalCorrect = 0;
        let totalAnswered = 0;
        const allIncorrect: IncorrectQuestionDetail[] = [];

        relevantTests.forEach(test => {
            totalCorrect += test.score;
            totalAnswered += test.totalQuestions;
            if (test.incorrectQuestions) {
                allIncorrect.push(...test.incorrectQuestions);
            }
        });
        
        const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
        
        const questionCounts = new Map<string, { count: number; correctAnswer: string }>();
        allIncorrect.forEach(q => {
            const existing = questionCounts.get(q.question);
            if (existing) {
                questionCounts.set(q.question, { ...existing, count: existing.count + 1 });
            } else {
                questionCounts.set(q.question, { count: 1, correctAnswer: q.correctAnswer });
            }
        });

        const problemAreas = Array.from(questionCounts.entries())
            .map(([question, data]) => ({ question, ...data }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

        return { accuracy, totalAnswered, totalCorrect, problemAreas };

    }, [testHistory, activeTab]);

    const TabButton: React.FC<{ examType: 'B1' | 'Life in the UK', icon: React.ElementType }> = ({ examType, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(examType)}
            className={`flex-1 flex items-center justify-center p-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${activeTab === examType ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
            <Icon className="h-5 w-5 mr-2" />
            {examType}
        </button>
    );

    return (
        <Card title="Performance Analysis" icon={<TrendingDownIcon />}>
            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <div className="flex -mb-px">
                    <TabButton examType="Life in the UK" icon={LandmarkIcon} />
                    <TabButton examType="B1" icon={AcademicCapIcon} />
                </div>
            </div>
            
            {analysisData.totalAnswered > 0 ? (
                <div className="space-y-6">
                    <div className="text-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Accuracy</p>
                        <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{analysisData.accuracy}%</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">({analysisData.totalCorrect} / {analysisData.totalAnswered} questions correct)</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Top Problem Areas</h4>
                        {analysisData.problemAreas.length > 0 ? (
                            <ul className="space-y-3">
                                {analysisData.problemAreas.map((item, index) => (
                                    <li key={index} className="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 rounded-r-md">
                                        <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.question}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            Incorrect <span className="font-bold">{item.count}</span> time(s). Correct answer: <span className="font-semibold">{item.correctAnswer}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-center py-4 text-gray-500 dark:text-gray-400">No incorrect answers recorded for this exam type. Great job!</p>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-center py-8 text-gray-500 dark:text-gray-400">Complete a {activeTab} mock test to see your performance analysis.</p>
            )}
        </Card>
    );
};


const Profile: React.FC<ProfileProps> = ({ userEmail, userProgress, onLogout, pointsPerLevel }) => {

    const sortedHistory = userProgress?.testHistory.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const progressPercentage = userProgress ? Math.round(((userProgress.points % pointsPerLevel) / pointsPerLevel) * 100) : 0;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Your Profile</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Track your performance, manage your progress, and view your achievements.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                     {userProgress && <PerformanceAnalysis testHistory={userProgress.testHistory} />}
                    <Card title="Achievements">
                        {userProgress && userProgress.achievements.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {userProgress.achievements.map(ach => {
                                    const IconComponent = iconMap[ach.icon] || BookOpenIcon;
                                    return (
                                        <div key={ach.id} className={`p-4 rounded-lg text-center transition-opacity ${ach.unlocked ? 'bg-indigo-50 dark:bg-gray-800 border border-indigo-200 dark:border-gray-700' : 'bg-gray-100 dark:bg-gray-800/50 opacity-50'}`}>
                                            <IconComponent className={`h-10 w-10 mx-auto ${ach.unlocked ? 'text-indigo-500' : 'text-gray-400'}`} />
                                            <p className="font-bold text-sm mt-2">{ach.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{ach.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                             <p>Complete tests to unlock achievements!</p>
                        )}
                    </Card>

                </div>
                
                <div className="lg:col-span-1 space-y-8">
                     <Card title="Current Level">
                        {userProgress ? (
                           <div className="flex flex-col items-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        <path className="text-gray-200 dark:text-gray-700" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="text-indigo-500" strokeWidth="3" fill="none" stroke="currentColor" strokeDasharray={`${progressPercentage}, 100`} strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold">{userProgress.level}</span>
                                        <span className="text-sm text-gray-500">Level</span>
                                    </div>
                                </div>
                                <p className="mt-4 font-semibold text-lg">{userProgress.points} Points</p>
                                <p className="text-sm text-gray-500">{pointsPerLevel - (userProgress.points % pointsPerLevel)} to next level</p>
                           </div>
                        ) : <p>Start a test to see your progress!</p>}
                     </Card>
                     <Card title="Account" icon={<UserIcon />}>
                        <p className="mb-2 text-sm">You are signed in as:</p>
                        <p className="font-semibold text-center bg-gray-100 dark:bg-gray-700 py-2 px-4 rounded-md mb-4 break-all">{userEmail}</p>
                        <button
                            onClick={onLogout}
                            className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Switch User
                        </button>
                    </Card>
                </div>
            </div>

            <Card title="Test History">
                {sortedHistory && sortedHistory.length > 0 ? (
                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {sortedHistory.map((result, index) => (
                           <div key={index} className="p-4 rounded-md bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center border border-gray-200 dark:border-gray-700">
                               <div>
                                   <p className="font-bold">{result.examType} - Exam {result.examNumber}</p>
                                   <p className="text-sm text-gray-500 dark:text-gray-400">
                                       {new Date(result.date).toLocaleDateString()}
                                   </p>
                               </div>
                               <div className="text-right">
                                   <p className={`font-bold text-lg ${result.score / result.totalQuestions >= 0.75 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                       {result.score} / {result.totalQuestions}
                                   </p>
                                   <p className="text-sm text-gray-500 dark:text-gray-400">
                                       {((result.score / result.totalQuestions) * 100).toFixed(0)}%
                                   </p>
                               </div>
                           </div>
                        ))}
                     </div>
                ) : (
                    <p>You have not completed any tests yet. Your results will appear here once you do.</p>
                )}
            </Card>
        </div>
    );
};

export default Profile;