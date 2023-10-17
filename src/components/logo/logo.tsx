import { Link, Typography } from "@mui/material";
import NextLink from "next/link";

type Props = {};

export default function Logo(props: Props) {
  return (
    <Link component={NextLink} href="/" sx={{ display: "contents" }}>
      <Typography variant="h3" color="#fff">
        SVNTHPATH
      </Typography>
    </Link>
  );
}
