
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { ContentProvider } from '../context/ContentContext';
import { ThemeConfig } from '../config/themes';
import { ContentConfig } from '../config/content';

interface TemplateProps {
  children: React.ReactNode;
  theme?: ThemeConfig;
  content?: ContentConfig;
}

export const Template: React.FC<TemplateProps> = ({ 
  children, 
  theme, 
  content 
}) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <ContentProvider content={content}>
        <div className="template-wrapper">
          {children}
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
};

export default Template;
