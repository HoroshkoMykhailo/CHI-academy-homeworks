import React from "react";
import { Container } from "@mui/material";
import { MainContainer } from "../../components/components";
import AboutHeader from "./components/aboutHeader";
import AboutDescription from "./components/aboutDescription";
import DeveloperInfo from "./components/developerInfo";

const About: React.FC = () => {
  return (
    <MainContainer >
      <Container maxWidth="md" sx={{ p: 4 }}>
        <AboutHeader />
        <AboutDescription />
        <DeveloperInfo />
      </Container>
    </MainContainer>
  );
};

export { About };