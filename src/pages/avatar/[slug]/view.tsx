import Head from "next/head";
import React from "react";
import { AvatarDetailView } from "@/sections/avatar/view";
import CommonLayout from "@/layouts/common";

AvatarDetailPage.getLayout = (page: React.ReactElement) => (
  <CommonLayout>{page}</CommonLayout>
);

type Props = {};

export default function AvatarDetailPage(props: Props) {
  return (
    <>
      <Head>
        <title> View | Avatar</title>
      </Head>

      <AvatarDetailView />
    </>
  );
}
