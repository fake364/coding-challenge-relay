import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

const BlockHead = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Create Product</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <CssBaseline />
    </>
  );
};
export default BlockHead;
