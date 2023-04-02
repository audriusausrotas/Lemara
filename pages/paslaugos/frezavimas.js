import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import Footer from "../../Components/Ui/Footer";

const DefaultPage = dynamic(
  () => import("../../Components/Components/DefaultPage"),
  {
    suspense: true,
  }
);

export default function Milling({ page, foot }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <DefaultPage
          name="milling"
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
        <Footer data={foot.data} />
      </Suspense>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("milling", "milling", { lang: locale });
  const foot = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      foot,
    },
  };
}
