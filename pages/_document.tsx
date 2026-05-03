import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7T28RDR5PC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7T28RDR5PC');
            `,
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/icon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon-96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />

        {/* Apple touch icon — iOS home screen, must be exactly 180x180 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Web app meta */}
        <meta name="apple-mobile-web-app-title" content="Open to Feedback" />
        <meta name="application-name" content="Open to Feedback" />
        <meta name="theme-color" content="#16a34a" />

        {/* Web app manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
