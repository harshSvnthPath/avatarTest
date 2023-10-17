import React from "react";
import { Box } from "@mui/material";
import Header from "../shared/header";
import Footer from "../shared/footer";

type Props = { children: React.ReactNode };

export default function CommonLayout({ children }: Props) {
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", height: 1 }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 10 },
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
