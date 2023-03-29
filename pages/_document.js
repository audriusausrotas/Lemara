import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schemaData = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Lemara",
    url: "https://lemara.lt",
    logo: "https://images.prismic.io/lemara/ed34360b-d837-4ec0-8613-2cdc515dc21e_logo.png?auto=compress,format",
    description: "Lemara - CNC Tekinimas, Frezavimas, Degalių gamyba",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasagų g. 4",
      addressLocality: "Riešės k",
      addressRegion: "Vilniaus r.",
      postalCode: "LT-14265",
      addressCountry: "Lietuva",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+37064657845",
    },
  };

  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="google-site-verification"
          content="qppZOOy2pWf1pTQ4ViD_5nL_2V4xA3IP5BQCde6tBYc"
        />
        <meta
          name="ahrefs-site-verification"
          content="f7527cada7672808a6be9dd5596d0503aec65c98ade66ab5968823a4abada74b"
        ></meta>
        <meta
          name="keywords"
          content="CNC Tekinimas, CNC Frezavimas, CNC Projektavimas, CNC Degalių gamyba"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
