
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  colors: ThemeColors;
  brandName: string;
  phone: string;
  email: string;
  logo?: string;
}

export const defaultTheme: ThemeConfig = {
  id: 'junkpro',
  name: 'JunkPro Hauling',
  colors: {
    primary: 'rgb(132, 204, 22)', // lime-500
    secondary: 'rgb(34, 197, 94)', // green-500
    accent: 'rgb(245, 158, 11)', // amber-500
    background: 'rgb(255, 255, 255)',
    text: 'rgb(17, 24, 39)', // gray-900
    muted: 'rgb(107, 114, 128)' // gray-500
  },
  brandName: 'JunkPro Hauling',
  phone: '(555) 123-4567',
  email: 'info@junkprohauling.com'
};

export const blueTheme: ThemeConfig = {
  id: 'bluepro',
  name: 'BluePro Services',
  colors: {
    primary: 'rgb(59, 130, 246)', // blue-500
    secondary: 'rgb(16, 185, 129)', // emerald-500
    accent: 'rgb(245, 158, 11)', // amber-500
    background: 'rgb(255, 255, 255)',
    text: 'rgb(17, 24, 39)',
    muted: 'rgb(107, 114, 128)'
  },
  brandName: 'BluePro Services',
  phone: '(555) 987-6543',
  email: 'info@blueproservices.com'
};

export const redTheme: ThemeConfig = {
  id: 'redpro',
  name: 'RedPro Solutions',
  colors: {
    primary: 'rgb(239, 68, 68)', // red-500
    secondary: 'rgb(168, 85, 247)', // purple-500
    accent: 'rgb(245, 158, 11)', // amber-500
    background: 'rgb(255, 255, 255)',
    text: 'rgb(17, 24, 39)',
    muted: 'rgb(107, 114, 128)'
  },
  brandName: 'RedPro Solutions',
  phone: '(555) 456-7890',
  email: 'info@redprosolutions.com'
};

export const purpleTheme: ThemeConfig = {
  id: 'purplepro',
  name: 'PurplePro Elite',
  colors: {
    primary: 'rgb(147, 51, 234)', // purple-600
    secondary: 'rgb(236, 72, 153)', // pink-500
    accent: 'rgb(34, 197, 94)', // green-500
    background: 'rgb(255, 255, 255)',
    text: 'rgb(17, 24, 39)',
    muted: 'rgb(107, 114, 128)'
  },
  brandName: 'PurplePro Elite',
  phone: '(555) 321-9876',
  email: 'info@purpleproelite.com'
};

export const availableThemes = [defaultTheme, blueTheme, redTheme, purpleTheme];
