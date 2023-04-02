import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Footer from "../Components/Ui/Footer";

const CapabilitiesMain = dynamic(
  () => import("../Components/Capabilities/CapabilitiesMain"),
  {
    suspense: true,
  }
);

export default function Capabilities({ page, nav, foot }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Suspense>
        <CapabilitiesMain data={page.data} fallback={`Loading...`} />
        <Footer data={foot.data} />
      </Suspense>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("equipment", "equipment", {
    lang: locale,
  });
  const foot = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      foot,
    },
  };
}
