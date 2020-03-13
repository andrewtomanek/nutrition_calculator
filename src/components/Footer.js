import React from "react";
import { StyledLink, BasicButton } from "../styles/elements";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  padding: 0;
  min-height: 10vh;
  padding: 0rem 0rem;
  background-color: var(--green);
  width: 100%;
`;

const FooterLayout = styled.div`
  display: grid;
  padding: 0.2rem 0.3rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.2rem 0.3rem;
  @media all and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const FooterLink = styled.a`
  background: hsla(24, 90%, 60%, 1);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  border-radius: 1rem;
`;

export const UpButton = styled(BasicButton)`
  border: solid 0.2rem white;
  border-radius:  2rem 2rem 0.1rem 0.1rem;
  color:hsla(24, 70%, 50%, 1);
`;

const Footer = () => {
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <FooterLayout>
        <FooterContent>
          <StyledLink to="/">Zdravá strava</StyledLink>
          <UpButton onClick={moveToTop}>&#x25B2;</UpButton>
          <FooterLink href="mailto:andrewtomanek@gmail.com">Kontakt</FooterLink>
        </FooterContent>
      </FooterLayout>
    </FooterContainer>
  );
};

export default Footer;
