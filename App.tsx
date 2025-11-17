import React, { useState, useEffect } from 'react';
import { Page, TestResult, UserProgressData, Achievement } from './types';
import B1Prep from './components/B1Prep';
import LifeInUKPrep from './components/LifeInUKPrep';
import Profile from './components/Profile';
import LoginScreen from './components/LoginScreen';
import { HomeIcon, SparklesIcon, UserIcon, AcademicCapIcon, BookOpenIcon, LandmarkIcon } from './components/icons';

const POINTS_PER_LEVEL = 150;
const POINTS_PER_CORRECT_ANSWER = 10;

const getInitialAchievements = (): Achievement[] => [
    { id: 'first_test', name: 'First Step', description: 'Complete your first mock test.', unlocked: false, icon: 'BookOpenIcon' },
    { id: 'perfect_score', name: 'Perfectionist', description: 'Get a perfect score on any mock test.', unlocked: false, icon: 'StarIcon' },
    { id: 'high_achiever', name: 'High Achiever', description: 'Score 90% or higher on a mock test.', unlocked: false, icon: 'TrophyIcon' },
    { id: 'b1_starter', name: 'B1 Starter', description: 'Complete one B1 mock test.', unlocked: false, icon: 'BadgeCheckIcon' },
    { id: 'uk_starter', name: 'UK Starter', description: 'Complete one Life in the UK mock test.', unlocked: false, icon: 'BadgeCheckIcon' },
    { id: 'five_tests', name: 'Consistent Learner', description: 'Complete 5 mock tests.', unlocked: false, icon: 'BookOpenIcon' },
    { id: 'ten_tests', name: 'Dedicated Student', description: 'Complete 10 mock tests.', unlocked: false, icon: 'TrophyIcon' },
];


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgressData | null>(null);

  useEffect(() => {
    const lastUser = localStorage.getItem('lastUser') || localStorage.getItem('userEmail');
    if (lastUser) {
      handleLogin(lastUser);
    }
  }, []);
  
  const upgradeProgressData = (progress: any): UserProgressData => {
      let points = progress.points || 0;
      let achievements = progress.achievements || getInitialAchievements();
      const testHistory: TestResult[] = progress.testHistory || [];

      // If points were not previously tracked, calculate them.
      if (progress.points === undefined) {
        testHistory.forEach(result => {
            points += result.score * POINTS_PER_CORRECT_ANSWER;
            achievements = checkAchievements(achievements, testHistory, result);
        });
      }
      
      // Ensure backward compatibility for incorrectQuestions
      testHistory.forEach(result => {
        if (!result.incorrectQuestions) {
          result.incorrectQuestions = [];
        }
      });
      
      const level = Math.floor(points / POINTS_PER_LEVEL) + 1;

      return {
          email: progress.email,
          testHistory: testHistory,
          points,
          level,
          achievements,
      };
  };

  const handleLogin = (email: string) => {
    setCurrentUserEmail(email);
    localStorage.setItem('lastUser', email);
    localStorage.removeItem('userEmail'); // Clean up old key
    handleLoadProgress(email);
  };
  
  const handleLogout = () => {
    setCurrentUserEmail(null);
    setUserProgress(null);
    setCurrentPage(Page.Home);
    localStorage.removeItem('lastUser');
  };

  const handleSaveProgress = (progress: UserProgressData) => {
    if (!currentUserEmail) return;
    localStorage.setItem(`progress_${currentUserEmail}`, JSON.stringify(progress));
    setUserProgress(progress);
  };

  const handleLoadProgress = (email: string) => {
    const savedProgress = localStorage.getItem(`progress_${email}`);
    if (savedProgress) {
      let progressData = JSON.parse(savedProgress);
      progressData = upgradeProgressData(progressData);
      setUserProgress(progressData);
    } else {
        const newUserProgress: UserProgressData = { 
            email: email, 
            testHistory: [],
            points: 0,
            level: 1,
            achievements: getInitialAchievements()
        };
        setUserProgress(newUserProgress);
        localStorage.setItem(`progress_${email}`, JSON.stringify(newUserProgress));
    }
  };
  
  const checkAchievements = (currentAchievements: Achievement[], history: TestResult[], newResult: TestResult): Achievement[] => {
      const updatedAchievements = [...currentAchievements];
      const now = new Date().toISOString();

      const unlock = (id: string) => {
          const achievement = updatedAchievements.find(a => a.id === id);
          if (achievement && !achievement.unlocked) {
              achievement.unlocked = true;
              achievement.dateUnlocked = now;
          }
      };
      
      if (history.length >= 1) unlock('first_test');
      if (newResult.score === newResult.totalQuestions) unlock('perfect_score');
      if (newResult.score / newResult.totalQuestions >= 0.9) unlock('high_achiever');
      if (history.filter(t => t.examType === 'B1').length >= 1) unlock('b1_starter');
      if (history.filter(t => t.examType === 'Life in the UK').length >= 1) unlock('uk_starter');
      if (history.length >= 5) unlock('five_tests');
      if (history.length >= 10) unlock('ten_tests');
      
      return updatedAchievements;
  }
  
  const handleSaveResult = (result: TestResult) => {
      if (!currentUserEmail || !userProgress) return;

      const newHistory = [...userProgress.testHistory, result];
      const pointsGained = result.score * POINTS_PER_CORRECT_ANSWER;
      const newTotalPoints = userProgress.points + pointsGained;
      const newLevel = Math.floor(newTotalPoints / POINTS_PER_LEVEL) + 1;
      const newAchievements = checkAchievements(userProgress.achievements, newHistory, result);

      const updatedProgress: UserProgressData = {
          ...userProgress,
          testHistory: newHistory,
          points: newTotalPoints,
          level: newLevel,
          achievements: newAchievements,
      };
      handleSaveProgress(updatedProgress);
  }
  
  if (!currentUserEmail) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case Page.B1:
        return <B1Prep onSaveResult={handleSaveResult} testHistory={userProgress?.testHistory || []} />;
      case Page.LifeInUK:
        return <LifeInUKPrep onSaveResult={handleSaveResult} testHistory={userProgress?.testHistory || []} />;
      case Page.Profile:
        return <Profile 
                  userEmail={currentUserEmail} 
                  userProgress={userProgress} 
                  onLogout={handleLogout}
                  pointsPerLevel={POINTS_PER_LEVEL}
                />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} userProgress={userProgress} pointsPerLevel={POINTS_PER_LEVEL} />;
    }
  };
  
  const allNavItems = [
      { page: Page.Home, label: 'Dashboard', icon: HomeIcon },
      { page: Page.B1, label: 'B1 Exam', icon: AcademicCapIcon },
      { page: Page.LifeInUK, label: 'Life in UK', icon: LandmarkIcon },
      { page: Page.Profile, label: 'Profile', icon: UserIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-200 font-sans flex flex-col md:flex-row">
       {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-800 px-4">
            <SparklesIcon className="h-8 w-8 text-indigo-500" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white ml-2">UK Prep AI</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
            {allNavItems.map(item => (
                 <a href="#" key={item.label} onClick={(e) => { e.preventDefault(); setCurrentPage(item.page); }}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPage === item.page ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                 </a>
            ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col w-full md:w-[calc(100%-16rem)]">
          {/* Header for mobile */}
          <header className="md:hidden flex items-center justify-between h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4">
             <div className="flex items-center">
                <SparklesIcon className="h-8 w-8 text-indigo-500" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white ml-2">UK Prep AI</h1>
             </div>
             <div className="flex items-center space-x-2">
                {userProgress && (
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-gray-800 rounded-full border-2 border-indigo-500 text-indigo-600 dark:text-indigo-300 font-bold text-sm">
                        {userProgress.level}
                    </div>
                )}
                <button
                    onClick={() => setCurrentPage(Page.Profile)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${currentPage === Page.Profile ? 'bg-indigo-100 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                    aria-label="Go to profile"
                >
                    <UserIcon className={`h-6 w-6 transition-colors duration-200 ${currentPage === Page.Profile ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`} />
                </button>
             </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
            {renderPage()}
          </main>
      </div>
      
       {/* Bottom Nav for mobile */}
       <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around">
            {allNavItems.filter(item => item.page !== Page.Profile).map(item => (
                <a href="#" key={item.label} onClick={(e) => { e.preventDefault(); setCurrentPage(item.page); }}
                    className={`flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium transition-colors duration-200 ${currentPage === item.page ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                    <item.icon className="h-6 w-6 mb-1" />
                    {item.label}
                 </a>
            ))}
       </nav>
    </div>
  );
};

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  userProgress: UserProgressData | null;
  pointsPerLevel: number;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, userProgress, pointsPerLevel }) => {
    const progressPercentage = userProgress ? Math.round(((userProgress.points % pointsPerLevel) / pointsPerLevel) * 100) : 0;
    const pointsToNextLevel = userProgress ? pointsPerLevel - (userProgress.points % pointsPerLevel) : pointsPerLevel;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    Welcome to Your AI Study Partner
                </h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    Let's get you ready for your UK exams!
                </p>
            </div>

            {userProgress && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Your Progress</h3>
                        <span className="px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:bg-gray-700 dark:text-indigo-300">Level {userProgress.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-2">{pointsToNextLevel} points to next level</p>
                </div>
            )}
            
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Exam</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onClick={() => setCurrentPage(Page.B1)} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-lg">
                               <AcademicCapIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">B1 Exam Prep</h4>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">Speaking & Listening Practice</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setCurrentPage(Page.LifeInUK)} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center">
                            <div className="p-3 bg-teal-100 dark:bg-gray-700 rounded-lg">
                               <LandmarkIcon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Life in the UK Prep</h4>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">Mock Tests & Study Aids</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;