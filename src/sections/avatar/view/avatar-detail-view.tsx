import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "@/components/image";
import AvatarView from "../avatar-view";

type Props = {};

export default function AvatarDetailView(props: Props) {
  return (
    <>
      <Container sx={{ pt: 4 }}>
        <Typography variant="h3">Avatar</Typography>

        <Grid container>
          <Grid item md={8}>
            <Box component="div" sx={{ height: 500 }}>
              <AvatarView />
            </Box>
          </Grid>

          <Grid item md={4}>
            <Image />
            <Image />
            <Image />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
