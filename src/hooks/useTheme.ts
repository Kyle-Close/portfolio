import React from 'react';

export type Theme = 'dark' | 'light';

function readInitialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(readInitialTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0c10' : '#f4f6f9');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable (private mode etc.) — theme just won't persist.
    }
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
