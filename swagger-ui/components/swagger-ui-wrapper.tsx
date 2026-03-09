'use client';

import { useEffect, useState } from 'react';
import type { ThemeName } from '@/lib/swagger-theme';
import { THEMES, getTheme, loadTheme } from '@/lib/swagger-theme';

interface SwaggerUIWrapperProps {
  url?: string;
  spec?: object;
  defaultTheme?: ThemeName;
}

export default function SwaggerUIWrapper({
  url,
  spec,
  defaultTheme = 'default',
}: SwaggerUIWrapperProps) {
  const [SwaggerUI, setSwaggerUI] = useState<React.ComponentType<any> | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    import('swagger-ui-react')
      .then((mod) => {
        setSwaggerUI(() => mod.default);
      })
      .catch((err) => {
        console.error('Failed to load SwaggerUI:', err);
      });
  }, []);

  useEffect(() => {
    const theme = getTheme(selectedTheme);
    loadTheme(theme);
  }, [selectedTheme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(e.target.value as ThemeName);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="swagger-container">
      <div className="control-bar">
        <button onClick={handleDarkModeToggle} className="dark-mode-toggle">
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <div className="theme-selector">
          <label htmlFor="theme-select">Theme: </label>
          <select id="theme-select" value={selectedTheme} onChange={handleThemeChange}>
            {THEMES.map((theme) => (
              <option key={theme.name} value={theme.name}>
                {theme.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {SwaggerUI && (
        <SwaggerUI
          url={url}
          spec={spec}
          deepLinking={true}
          displayOperationId={false}
          defaultModelsExpandDepth={1}
          defaultModelExpandDepth={1}
          docExpansion="list"
          className={isDarkMode ? 'swagger-ui dark' : 'swagger-ui'}
        />
      )}
    </div>
  );
}
