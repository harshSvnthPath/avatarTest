import React from "react";
import Head from "next/head";
import CommonLayout from "@/layouts/common";
import { RegisterView } from "@/sections/auth/view";
import { GuestGuard } from "@/guards";

RegisterPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CommonLayout>{page}</CommonLayout>
  </GuestGuard>
);

type Props = {};

export default function RegisterPage(props: Props) {
  return (
    <>
      <Head>
        <title> Register | Avatar</title>
      </Head>

      <RegisterView />
    </>
  );
}
