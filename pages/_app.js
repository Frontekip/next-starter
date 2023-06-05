import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import getConfig from "next/config";

import NextNProgress from "nextjs-progressbar";
import { config } from "@fortawesome/fontawesome-svg-core";

// Styles
import "../styles/main.scss";

// Configs
config.autoAddCss = false;

// Public Runtime Config See: next.config.js and .env, .env.production files.
const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.GOOGLE_ANALYTICS_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${publicRuntimeConfig.GOOGLE_ANALYTICS_CODE}');
        `}
      </Script>

      <NextNProgress height={4} color={publicRuntimeConfig.PROGRESSBAR_COLOR} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
