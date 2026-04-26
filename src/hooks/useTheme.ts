"use client";
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme');
      const hasDarkClass = document.documentElement.classList.contains('dark');
      
      // Check localStorage first, then fallback to DOM class
      setIsDarkMode(theme === 'dark' || (!theme && hasDarkClass));
    };

    // Check initial theme
    checkTheme();

    // Listen for changes to the DOM class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for storage changes (in case theme is changed in another tab)
    const handleStorageChange = () => {
      checkTheme();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return isDarkMode;
};
