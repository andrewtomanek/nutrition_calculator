import React from "react";
import AuthForm from "../components/forms/AuthForm";
import Navigation from "../components/Navigation";
import { PageLayout } from "../styles/elements.js";

const SignUp = () => {
  return (
    <PageLayout>
      <Navigation />
      <AuthForm register />
    </PageLayout>
  );
};

export default SignUp;
