import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Open to Feedback</title>
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
