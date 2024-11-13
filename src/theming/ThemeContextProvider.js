// Importing
import React, {useState} from 'react';
import {
  DarkThemeColors,
  IndependentColors,
  LightThemeColors,
} from '../config/Colors';
import {ThemeContext} from './ThemeContext';

// Exporting context provider to provide it's values & methods globally
export const ThemeContextProvider = ({children}) => {
  // Local state
  const [theme, setTheme] = useState({
    lightTheme: {
      primary: LightThemeColors.primary,
      secondary: LightThemeColors.secondary,
      accent: IndependentColors.orange,
      textHighContrast: LightThemeColors.textHighContrast,
      textLowContrast: LightThemeColors.textLowContrast,
    },
    darkTheme: {
      primary: DarkThemeColors.primary,
      secondary: DarkThemeColors.secondary,
      accent: IndependentColors.orange,
      textHighContrast: DarkThemeColors.textHighContrast,
      textLowContrast: DarkThemeColors.textLowContrast,
    },
    isLightTheme: true,
  });

  // Toggling theme mode(Light/Dark)
  const _toggleTheme = () => {
    // Updating local state
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{...theme, _toggleTheme: _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
