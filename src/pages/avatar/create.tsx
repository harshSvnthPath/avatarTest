import React from "react";
import Head from "next/head";
import { AvatarCreateView } from "@/sections/avatar/view";
import CommonLayout from "@/layouts/common";

CreateAvatarPage.getLayout = (page: React.ReactElement) => (
  <CommonLayout>{page}</CommonLayout>
);

type Props = {};

export default function CreateAvatarPage(props: Props) {
  return (
    <>
      <Head>
        <title> Create | Avatar</title>
      </Head>

      <AvatarCreateView />
    </>
  );
}
