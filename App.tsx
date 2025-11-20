
import React, { useState, useEffect } from 'react';
import { Page, TestResult, UserProgressData } from './types';
import B1Prep from './components/B1Prep';
import LifeInUKPrep from './components/LifeInUKPrep';
import Profile from './components/Profile';
import LoginScreen from './components/LoginScreen';
import { HomeIcon, SparklesIcon, UserIcon, AcademicCapIcon, LandmarkIcon } from './components/icons';
import { storageService } from './services/storageService';
import { calculateNewProgress, POINTS_PER_LEVEL } from './utils/progressUtils';
import Spinner from './components/shared/Spinner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgressData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const lastUser = localStorage.getItem('lastUser');
    if (lastUser) {
      handleLogin(lastUser);
    }
  }, []);
  
  const handleLogin = async (email: string) => {
    setIsLoading(true);
    try {
        const progress = await storageService.loadProgress(email);
        setCurrentUserEmail(email);
        setUserProgress(progress);
        localStorage.setItem('lastUser', email);
    } catch (error) {
        console.error("Login failed", error);
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleLogout = () => {
    setCurrentUserEmail(null);
    setUserProgress(null);
    setCurrentPage(Page.Home);
    localStorage.removeItem('lastUser');
  };

  const handleSaveResult = async (result: TestResult) => {
      if (!currentUserEmail || !userProgress) return;

      const updatedProgress = calculateNewProgress(userProgress, result);
      
      // Optimistic update
      setUserProgress(updatedProgress);

      // Persist to "Backend"
      try {
        await storageService.saveProgress(updatedProgress);
      } catch (error) {
          console.error("Failed to save progress", error);
          // Optionally revert optimistic update or show toast error
      }
  };
  
  const handleImportProgress = async (data: UserProgressData) => {
      // When importing, we save immediately and update state
      setIsLoading(true);
      try {
          await storageService.saveProgress(data);
          // If the imported data is for the current user, update state
          if (data.email === currentUserEmail) {
              setUserProgress(data);
          } else {
              // Switch user to the imported one
              setCurrentUserEmail(data.email);
              setUserProgress(data);
              localStorage.setItem('lastUser', data.email);
          }
      } catch (error) {
          console.error("Import failed", error);
      } finally {
          setIsLoading(false);
      }
  };

  if (isLoading && !userProgress && !currentUserEmail) {
      return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center">
              <div className="text-center">
                  <Spinner />
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Connecting to storage...</p>
              </div>
          </div>
      );
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
                  onImport={handleImportProgress}
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

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8 relative">
            {isLoading && (
                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-50 flex items-center justify-center">
                    <Spinner />
                </div>
            )}
            {renderPage()}
          </main>
      </div>
      
       {/* Bottom Nav for mobile */}
       <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around z-40">
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
