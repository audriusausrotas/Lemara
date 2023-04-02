import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Components/Ui/Theme/theme";
import "../Components/Ui/Theme/styles.css";
import Head from "next/head";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Layout from "../Components/Ui/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics measurementId="G-QPQYS0TKC7" />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
