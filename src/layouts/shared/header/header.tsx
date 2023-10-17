import React from "react";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import Logo from "@/components/logo";
import LoginButton from "@/layouts/shared/header/login-button";
import { HEADER } from "../../../../global-config";
import { useTheme } from "@mui/material/styles";
import { useOffsetTop } from "@/hooks";

type Props = {};

export default function Header(props: Props) {
  const theme = useTheme();

  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo />

          <Box component="div" sx={{ flexGrow: 1 }} />

          <Stack direction="row" gap={1}>
            <LoginButton />
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
