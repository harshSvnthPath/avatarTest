import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {};

export default function LoginButton(props: Props) {
  const { push } = useRouter();

  const { status } = useSession();

  const onClickButton = useCallback(async () => {
    if (status === "authenticated") {
      await signOut();
      push("/auth/login");
    } else {
      push("/auth/login");
    }
  }, [status]);

  return (
    <>
      <Button
        sx={{ color: "#fff" }}
        variant="contained"
        onClick={onClickButton}
      >
        {status === "authenticated" ? "Logout" : "Login"}
      </Button>
    </>
  );
}
