import { Box, Container, Typography } from "@mui/material";

type Props = {};

export default function Section1(props: Props) {
  return (
    <Box
      sx={{
        bgcolor: "#ddd",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h1">Section1</Typography>
        </Box>
      </Container>
    </Box>
  );
}
