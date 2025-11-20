
import React, { useState, useEffect } from 'react';
import { SparklesIcon } from './icons';
import { storageService } from '../services/storageService';

interface LoginScreenProps {
  onLogin: (email: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [emailInput, setEmailInput] = useState('');
  const [knownUsers, setKnownUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
        try {
            const users = await storageService.getUsers();
            setKnownUsers(users);
        } catch (e) {
            console.error("Failed to load users");
        }
    };
    loadUsers();
  }, []);

  const handleLogin = (email: string) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;
    setIsLoading(true);
    onLogin(trimmedEmail);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center text-center mb-8">
            <SparklesIcon className="h-12 w-12 text-indigo-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to UK Prep AI</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to save and track your progress.</p>
        </div>

        {knownUsers.length > 0 && (
            <div className="space-y-3 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 text-center uppercase">Select a profile</h2>
                <div className="max-h-40 overflow-y-auto space-y-3 pr-2">
                    {knownUsers.map(email => (
                        <button
                            key={email}
                            onClick={() => handleLogin(email)}
                            className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        >
                            {email}
                        </button>
                    ))}
                </div>
            </div>
        )}

        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-500 text-center uppercase">{knownUsers.length > 0 ? 'Or use another' : 'Enter your email'}</p>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin(emailInput)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <button
            onClick={() => handleLogin(emailInput)}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 dark:ring-offset-gray-900 flex justify-center"
            disabled={!emailInput.trim() || isLoading}
          >
            {isLoading ? 'Loading...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
