
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeConfig, defaultTheme } from '../config/themes';

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  applyTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeConfig;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme = defaultTheme 
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(initialTheme);

  const applyTheme = (theme: ThemeConfig) => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.colors.primary);
    root.style.setProperty('--theme-secondary', theme.colors.secondary);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    root.style.setProperty('--theme-text', theme.colors.text);
    root.style.setProperty('--theme-muted', theme.colors.muted);
  };

  const setTheme = (theme: ThemeConfig) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  // Apply initial theme
  React.useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
