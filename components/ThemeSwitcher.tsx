import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, LaptopIcon } from './icons';

type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { name: Theme; icon: React.ElementType; label: string }[] = [
    { name: 'light', icon: SunIcon, label: 'Light' },
    { name: 'dark', icon: MoonIcon, label: 'Dark' },
    { name: 'system', icon: LaptopIcon, label: 'System' },
  ];

  return (
    <div className="p-2">
      <div className="flex items-center justify-center space-x-1 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-full flex justify-center items-center rounded-md p-2 text-sm font-medium transition-colors ${
              theme === t.name
                ? 'bg-white text-indigo-600 shadow-sm dark:bg-gray-950 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
            }`}
            aria-label={`Switch to ${t.name} theme`}
            title={`Switch to ${t.label} theme`}
          >
            <t.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
