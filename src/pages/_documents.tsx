/* eslint-disable @next/next/no-title-in-document-head */
import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
type Props = {};

const Document = (props: Props) => {
  return (
    <Html>
      <Head>
        <title>Adejori Eniola - Softwear engineer</title>
        <meta name="title" content="Frontend developer" />
        <meta
          name="description"
          content="Adejori Eniola, a frontend web developer, with vast skills in React, Javascript and python, based in Lagos Nigeria"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Adejori Eniola - Softwear engineer"
        />
        <meta
          property="og:description"
          content="Adejori Eniola, a frontend web developer, with vast skills in React, Javascript and python, based in Lagos Nigeria"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Adejori Eniola - Softwear engineer"
        />
        <meta
          property="twitter:description"
          content="Adejori Eniola, a frontend web developer, with vast skills in React, Javascript and python, based in Lagos Nigeria"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
