import FormProvider from "@/components/hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Stack } from "@mui/material";
import CapturePhoto from "@/sections/avatar/capture-photo";
import CaptureImageReview from "@/sections/avatar/capture-image-review";
import LoadingButton from "@mui/lab/LoadingButton";

const AvatarCreateScheme = Yup.object().shape({
  images: Yup.array(Yup.string().required("")).required(""),
});

const defaultValues = {
  images: [],
};

type Props = {};

export default function AvatarCreateForm(props: Props) {
  const methods = useForm({
    resolver: yupResolver(AvatarCreateScheme),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  const renderForm = (
    <Stack>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CapturePhoto />
        </Grid>
        <Grid item md={6}>
          <CaptureImageReview />
        </Grid>
      </Grid>

      <Stack alignItems="end">
        <LoadingButton variant="contained">Create New Avatar</LoadingButton>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
