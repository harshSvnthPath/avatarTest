import LoginForm from "@/sections/auth/login-form";
import { Card, Container } from "@mui/material";

type Props = {};

export default function LoginView(props: Props) {
  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 500, p: 5, mt: 10, mx: "auto" }}>
          <LoginForm />
        </Card>
      </Container>
    </>
  );
}
