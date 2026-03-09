'use client';

import { useEffect, useState } from 'react';
import SwaggerUIWrapper from '@/components/swagger-ui-wrapper';
import type { ThemeName } from '@/lib/swagger-theme';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [defaultTheme, setDefaultTheme] = useState<ThemeName>('default');

  useEffect(() => {
    const file = process.env.NEXT_PUBLIC_SWAGGER_FILE || 'openapi.yaml';
    const theme = (process.env.NEXT_PUBLIC_SWAGGER_DEFAULT_THEME || 'default') as ThemeName;
    setUrl(`/${file}`);
    setDefaultTheme(theme);
  }, []);

  if (!url) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SwaggerUIWrapper url={url} defaultTheme={defaultTheme} />
    </div>
  );
}
