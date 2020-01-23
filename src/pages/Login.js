import React from "react";
import AuthForm from "../components/forms/AuthForm";
import { PageLayout } from "../styles/elements.js";

const Login = () => {
  return (
    <PageLayout>
      <AuthForm register={false} />
    </PageLayout>
  );
};

export default Login;
