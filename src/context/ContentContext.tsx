
import React, { createContext, useContext, ReactNode } from 'react';
import { ContentConfig, defaultContent } from '../config/content';

interface ContentContextType {
  content: ContentConfig;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
  content?: ContentConfig;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ 
  children, 
  content = defaultContent 
}) => {
  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  );
};
