import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Link, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { RouterLink } from "@/routers/components";
import axios from "@/utils/axios";
import { APP_ENDPOINTS } from "../../../global-config";
import { useRouter } from "next/router";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Password is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type Props = {};

export default function RegisterForm(props: Props) {
  const { push } = useRouter();

  const [errorMsg, setErrorMsg] = useState("");

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await axios.post(APP_ENDPOINTS.register, { ...data });

      push("/auth/login");
    } catch (error: any) {
      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="name" />

      <RHFTextField name="email" />

      <RHFTextField name="password" type="password" />

      <RHFTextField name="confirmPassword" type="password" />

      <Box>
        <Link href={"/auth/login"} component={RouterLink}>
          Signin
        </Link>
      </Box>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        loading={isSubmitting}
      >
        Sign Up
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
