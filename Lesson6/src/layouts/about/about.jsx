import React from "react";
import { Container } from "@mui/material";
import { MainContainer } from "../../components/components";
import AboutHeader from "./components/aboutHeader";
import AboutDescription from "./components/aboutDescription";
import DeveloperInfo from "./components/developerInfo";

const About = () => {
  return (
    <MainContainer >
      <Container maxWidth="md" sx={{ color: "black", borderRadius: 4, p: 4 }}>
        <AboutHeader />
        <AboutDescription />
        <DeveloperInfo />
      </Container>
    </MainContainer>
  );
};

export { About };