import React from "react";
import AuthForm from "../auth/AuthForm";
import Navigation from "../components/Navigation";
import styled from 'styled-components'

const PageLayout = styled.div`
display: grid;
grid-auto-flow: row;
justify-items: center;
margin: 0;
padding: 0;
min-height: 100vh;
overflow: hidden;
@media all and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SignUp = () => {
  return (
    <PageLayout>
      <Navigation />
      <AuthForm register />     
      </PageLayout>
  );
};

export default SignUp;
