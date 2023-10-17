import React from "react";
import Head from "next/head";
import { AvatarListView } from "@/sections/avatar/view";
import CommonLayout from "@/layouts/common";

AvatarListPage.getLayout = (page: React.ReactElement) => (
  <CommonLayout>{page}</CommonLayout>
);

type Props = {};

export default function AvatarListPage(props: Props) {
  return (
    <>
      <Head>
        <title> List | Avatar</title>
      </Head>

      <AvatarListView />
    </>
  );
}
