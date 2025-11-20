import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let timeoutId: number;

    const applyTheme = (currentTheme: Theme) => {
        root.classList.add('no-transitions');

        const isDark =
            currentTheme === 'dark' ||
            (currentTheme === 'system' && mediaQuery.matches);
        
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(isDark ? 'dark' : 'light');
        
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            root.classList.remove('no-transitions');
        }, 100);
    };
    
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    
    // Listener for system theme changes
    const handleSystemThemeChange = () => {
        // Only re-apply if the current setting is 'system'
        if (theme === 'system') {
            applyTheme('system');
        }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener and timeout on component unmount or theme change
    return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
        clearTimeout(timeoutId);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
