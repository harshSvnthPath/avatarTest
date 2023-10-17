import React, { useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./global-styles";
import { palette } from "@/theme/palette";

type Props = { children: React.ReactNode };

export default function ThemeProvider({ children }: Props) {
  const themeOptions = useMemo(() => ({ palette: palette("light") }), []);

  const theme = createTheme(themeOptions as ThemeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
