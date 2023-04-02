import Head from "next/head";
import React from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import HomeMain from "../Components/Home/HomeMain";
import Footer from "../Components/Ui/Footer";

export default function HomePage({ page, foot }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <HomeMain data={page.data} />
      <Footer data={foot.data} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("home", "home", { lang: locale });
  const foot = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      foot,
    },
  };
}
