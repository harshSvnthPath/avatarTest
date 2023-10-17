import { Card, Container } from "@mui/material";
import RegisterForm from "@/sections/auth/register-form";

type Props = {};

export default function RegisterView(props: Props) {
  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 500, p: 5, mt: 10, mx: "auto" }}>
          <RegisterForm />
        </Card>
      </Container>
    </>
  );
}
