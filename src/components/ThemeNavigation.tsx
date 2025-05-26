
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Zap, Flame, Crown } from 'lucide-react';

const ThemeNavigation = () => {
  const themes = [
    {
      name: 'Green Theme',
      path: '/',
      icon: <Zap className="w-5 h-5" />,
      gradient: 'from-lime-500 to-green-500',
      description: 'Eco-friendly design'
    },
    {
      name: 'Blue Theme',
      path: '/blue',
      icon: <Palette className="w-5 h-5" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Professional & trustworthy'
    },
    {
      name: 'Red Theme',
      path: '/red',
      icon: <Flame className="w-5 h-5" />,
      gradient: 'from-red-500 to-pink-500',
      description: 'Bold & energetic'
    },
    {
      name: 'Purple Theme',
      path: '/purple',
      icon: <Crown className="w-5 h-5" />,
      gradient: 'from-purple-600 to-pink-500',
      description: 'Premium & elegant'
    }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-3 text-center">Choose Theme</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((theme, index) => (
          <Link
            key={index}
            to={theme.path}
            className={`bg-gradient-to-r ${theme.gradient} p-3 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg group`}
          >
            <div className="flex items-center justify-center mb-1">
              {theme.icon}
            </div>
            <div className="text-xs font-medium text-center">{theme.name}</div>
            <div className="text-xs opacity-90 text-center mt-1">{theme.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThemeNavigation;
