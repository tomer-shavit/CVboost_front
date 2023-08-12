import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overscroll-none overflow-x-none selection:bg-green-600 scrollbar-thin scrollbar-track-slate-700 scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
