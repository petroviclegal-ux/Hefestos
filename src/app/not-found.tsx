import { DEFAULT_LOCALE } from '@/lib/site';

/**
 * Global 404 → exported as /404.html. It renders its own <html> document
 * because the root layout is a pass-through (see app/layout.tsx).
 */
export default function NotFound() {
  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Page not found | Hefestos Capital</title>
        <meta name="robots" content="noindex" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          background: '#0B0F14',
          color: '#F7F5F0',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <p style={{ fontSize: '3rem', margin: 0, color: '#A03A50' }}>404</p>
          <h1 style={{ fontWeight: 600, marginTop: '0.5rem' }}>Page not found</h1>
          <p style={{ opacity: 0.75, marginTop: '0.75rem' }}>
            The page you are looking for doesn’t exist or has moved.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="/en/" style={{ color: '#F7F5F0' }}>
              Hefestos Capital — Home
            </a>{' '}
            ·{' '}
            <a href="/sr/" style={{ color: '#F7F5F0' }}>
              Početna (Srpski)
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
