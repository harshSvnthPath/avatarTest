import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSearchParams } from "@/routers/hooks";
import { PATHS } from "@/routers/paths";

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { data: session, status } = useSession();

  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo") || PATHS.avatar.list;

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(returnTo);
    }
  }, [status]);

  return <>{children}</>;
}
