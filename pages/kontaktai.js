import Head from "next/head";
import emailjs from "@emailjs/browser";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Footer from "../Components/Ui/Footer";

const ContactsMain = dynamic(
  () => import("../Components/Contacts/ContactsMain"),
  {
    suspense: true,
  }
);

export default function Contacts(props) {
  async function sendMessage(form) {
    await emailjs.send(props.SERVICE_ID, props.TEMPLATE_ID, form, props.KEY);
  }
  return (
    <React.Fragment>
      <Head>
        <title>{props.page.data.meta_title}</title>
        <meta name="description" content={props.page.data.meta_description} />
      </Head>
      <Suspense>
        <ContactsMain
          data={props.page.data}
          sendMessage={sendMessage}
          fallback={`Loading...`}
        />
        <Footer data={props.foot.data} />
      </Suspense>
    </React.Fragment>
  );
}
export async function getStaticProps({ locale }) {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("contacts", "contacts", { lang: locale });
  const foot = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      foot,
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      KEY: process.env.KEY,
    },
  };
}
