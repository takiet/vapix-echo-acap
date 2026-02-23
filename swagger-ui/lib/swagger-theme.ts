export type ThemeName =
  | 'default'
  | 'feeling-blue'
  | 'flattop'
  | 'monokai'
  | 'material'
  | 'muted'
  | 'newspaper'
  | 'outline';

export interface Theme {
  name: ThemeName;
  label: string;
  cssUrl?: string;
}

export const THEMES: Theme[] = [
  { name: 'default', label: 'Default' },
  {
    name: 'feeling-blue',
    label: 'Feeling Blue',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-feeling-blue.css',
  },
  {
    name: 'flattop',
    label: 'Flattop',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-flattop.css',
  },
  {
    name: 'monokai',
    label: 'Monokai',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-monokai.css',
  },
  {
    name: 'material',
    label: 'Material',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-material.css',
  },
  {
    name: 'muted',
    label: 'Muted',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-muted.css',
  },
  {
    name: 'newspaper',
    label: 'Newspaper',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-newspaper.css',
  },
  {
    name: 'outline',
    label: 'Outline',
    cssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-outline.css',
  },
];

export function getTheme(themeName: ThemeName): Theme {
  return THEMES.find((t) => t.name === themeName) || THEMES[0];
}

export function loadTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  const existingThemeLink = document.getElementById('swagger-theme-link');
  if (existingThemeLink) {
    existingThemeLink.remove();
  }

  if (theme.cssUrl) {
    const link = document.createElement('link');
    link.id = 'swagger-theme-link';
    link.rel = 'stylesheet';
    link.href = theme.cssUrl;
    document.head.appendChild(link);
  }
}
