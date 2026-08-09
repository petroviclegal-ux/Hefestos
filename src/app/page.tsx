import { DEFAULT_LOCALE } from '@/lib/site';

/**
 * Root `/` is a language gateway. Because the site is statically exported (no
 * server redirects), we ship a small HTML document that:
 *  - instantly forwards visitors to the default locale via <meta refresh>,
 *  - upgrades to the browser's preferred language (sr/en) via a tiny script,
 *  - and stays crawlable, with a canonical + hreflang alternates for search.
 *
 * This page renders its own <html> because the root layout is a pass-through.
 */
export default function RootRedirect() {
  const target = `/${DEFAULT_LOCALE}/`;
  const script = `(function(){try{var l=(navigator.language||'en').toLowerCase();var to=l.indexOf('sr')===0?'/sr/':'/en/';location.replace(to);}catch(e){location.replace('${target}');}})();`;

  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hefestos Capital — Investment Banking &amp; M&amp;A Advisory</title>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href="https://www.hefcap.com/en/" />
        <link rel="alternate" hrefLang="en" href="https://www.hefcap.com/en/" />
        <link rel="alternate" hrefLang="sr" href="https://www.hefcap.com/sr/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.hefcap.com/en/" />
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', background: '#F7F5F0', color: '#0B0F14' }}>
        <noscript>
          <p style={{ padding: '2rem' }}>
            Continue to <a href="/en/">Hefestos Capital (English)</a> ·{' '}
            <a href="/sr/">Hefestos Capital (Srpski)</a>
          </p>
        </noscript>
      </body>
    </html>
  );
}
