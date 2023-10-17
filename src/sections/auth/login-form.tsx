import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Link, Stack } from "@mui/material";
import { RouterLink } from "@/routers/components";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
};

type Props = {};

export default function LoginForm(props: Props) {
  const [errorMsg, setErrorMsg] = useState("");

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(result);
    } catch (error: any) {
      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="email" />

      <RHFTextField name="password" type="password" />

      <Box component="div">
        <Link href={"/auth/register"} component={RouterLink}>
          Signup
        </Link>
      </Box>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        loading={isSubmitting}
      >
        LOGIN
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
