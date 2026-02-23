import SwaggerUIWrapper from '@/components/swagger-ui-wrapper';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  const swaggerUrl = process.env.NEXT_PUBLIC_SWAGGER_URL;
  const defaultTheme = (process.env.NEXT_PUBLIC_SWAGGER_DEFAULT_THEME || 'default') as
    | 'default'
    | 'feeling-blue'
    | 'flattop'
    | 'monokai'
    | 'material'
    | 'muted'
    | 'newspaper'
    | 'outline';

  return (
    <div>
      <SwaggerUIWrapper url={swaggerUrl} defaultTheme={defaultTheme} />
    </div>
  );
}
