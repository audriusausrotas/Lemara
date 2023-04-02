import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Main = dynamic(() => import("../Components/Calculator/Main"), {
  suspense: true,
});

export default function calculator() {
  return (
    <>
      <Head>
        <title>Lemara Invoice Checker</title>
      </Head>
      <Suspense fallback={`Loading...`}>
        <Main />
      </Suspense>
    </>
  );
}
