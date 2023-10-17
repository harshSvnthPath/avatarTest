import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/create-emotion-cache";
import ThemeProvider from "@/theme";
import { SessionProvider } from "next-auth/react";
import { MotionLazy } from "@/components/animate";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
    emotionCache = clientSideEmotionCache,
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="description" content="Wonderraw Shop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title> Home | Yacine Test Project</title>
      </Head>

      <ThemeProvider>
        <SessionProvider session={session}>
          <MotionLazy>{getLayout(<Component {...pageProps} />)}</MotionLazy>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
