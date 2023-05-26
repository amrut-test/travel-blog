import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import Analytics from "@layouts/components/analytics";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en" >
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
         <Analytics />
      </Head>
      <body >
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
