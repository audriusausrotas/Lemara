import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
const DefaultPage = dynamic(() => import("../../Components/Ui/DefaultPage"), {
  suspense: true,
});

export default function Turning({ page }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <DefaultPage
          name="turning"
          src={page.data.image.url}
          alt={page.data.image.alt}
          heading={page.data.title}
          text={page.data.text}
          w={page.data.image.dimensions.width}
          h={page.data.image.dimensions.height}
          bg={page.data.background_color}
          color={page.data.text_color}
          bgTexture={page.data.background_texture.url}
          fallback={`Loading...`}
        />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("turning", "turning", { lang: locale });
  const foot = await client.getByUID("footer", "footer", { lang: locale });
  const nav = await client.getByUID("navigation", "navigation", {
    lang: locale,
  });

  return {
    props: {
      page,
      foot,
      nav,
    },
  };
}
