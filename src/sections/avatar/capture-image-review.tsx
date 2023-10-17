import { useFormContext } from "react-hook-form";
import { Grid } from "@mui/material";
import Image from "@/components/image";

type Props = {};

export default function CaptureImageReview(props: Props) {
  const { watch } = useFormContext();

  const images = watch("images") as string[];

  return (
    <Grid container spacing={3}>
      {images.map((img) => (
        <Grid item md={3}>
          <Image src={img} />
        </Grid>
      ))}
    </Grid>
  );
}
