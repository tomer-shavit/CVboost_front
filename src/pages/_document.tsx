import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="min-h-full bg-gradient-to-b from-gray-700 to-gray-900 h-full w-full"
    >
      <Head>
        <meta property="og:title" content="CVBoost" />
        <meta property="og:url" content="https://cvboost.ai/" />
        <meta property="og:description" content="Boost your resume now" />
        <meta property="og:image" content="/favicon-32x32.png" />

        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body className="overscroll-none overflow-x-none selection:bg-green-600 scrollbar-thin scrollbar-track-slate-700 scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
