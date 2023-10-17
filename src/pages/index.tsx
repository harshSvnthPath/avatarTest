import React from "react";
import Head from "next/head";
import CommonLayout from "@/layouts/common";
import { HomePageView } from "@/sections/home/view";

HomePage.getLayout = (page: React.ReactElement) => (
  <CommonLayout>{page}</CommonLayout>
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Home | Avatar</title>
      </Head>

      <HomePageView />
    </>
  );
}
