import React from "react";
import Head from "next/head";
import CommonLayout from "@/layouts/common";
import { LoginView } from "@/sections/auth/view";
import { GuestGuard } from "@/guards";

AuthPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CommonLayout>{page}</CommonLayout>
  </GuestGuard>
);

type Props = {};

export default function AuthPage(props: Props) {
  return (
    <>
      <Head>
        <title> Login | Avatar</title>
      </Head>

      <LoginView />
    </>
  );
}
