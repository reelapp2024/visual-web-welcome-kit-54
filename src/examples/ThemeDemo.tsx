
import React, { useState } from 'react';
import Template from '../components/Template';
import ThemedHeader from '../components/ThemedHeader';
import { availableThemes, ThemeConfig } from '../config/themes';
import { defaultContent } from '../config/content';

const ThemeDemo = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(availableThemes[0]);

  return (
    <Template theme={currentTheme} content={defaultContent}>
      <div className="min-h-screen">
        {/* Theme Switcher */}
        <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">Switch Theme:</h3>
          <div className="space-y-2">
            {availableThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setCurrentTheme(theme)}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  currentTheme.id === theme.id 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>

        <ThemedHeader />
        
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>
              {currentTheme.brandName}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This is a demo of the modular theme system. Switch themes using the panel on the right.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg border">
                <h3 className="font-semibold mb-2" style={{ color: currentTheme.colors.primary }}>
                  Primary Color
                </h3>
                <div 
                  className="w-full h-12 rounded"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                ></div>
              </div>
              
              <div className="p-6 rounded-lg border">
                <h3 className="font-semibold mb-2" style={{ color: currentTheme.colors.secondary }}>
                  Secondary Color
                </h3>
                <div 
                  className="w-full h-12 rounded"
                  style={{ backgroundColor: currentTheme.colors.secondary }}
                ></div>
              </div>
              
              <div className="p-6 rounded-lg border">
                <h3 className="font-semibold mb-2" style={{ color: currentTheme.colors.accent }}>
                  Accent Color
                </h3>
                <div 
                  className="w-full h-12 rounded"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                ></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Template>
  );
};

export default ThemeDemo;
