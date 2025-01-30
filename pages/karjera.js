import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Footer from "../Components/Ui/Footer";

const CareerMain = dynamic(() => import("../Components/Career/CareerMain"), {
  suspense: true,
});

export default function Carrier({ page, foot }) {
  return (
    <React.Fragment>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_title} />
      </Head>
      <Suspense>
        <CareerMain data={page.data} fallback={`Loading...`} />
        <Footer data={foot.data} />
      </Suspense>
    </React.Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("career", "career", { lang: locale });
  const foot = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      foot,
    },
  };
}
