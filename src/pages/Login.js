import React from "react";
import AuthForm from "../components/forms/AuthForm";
import Navigation from "../components/Navigation";
import { PageLayout } from "../styles/elements.js";

const Login = () => {
  return (
    <PageLayout>
      <Navigation />
      <AuthForm register={false} />
    </PageLayout>
  );
};

export default Login;
