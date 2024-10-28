import React from "react";
import { MainContainer } from "../../components/components";
import HomeHeader from "./сomponents/homeHeader";
import HomeDescription from "./сomponents/homeDescription";
import { CustomButton } from "../../components/components";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <MainContainer
      backgroundImage="https://m.media-amazon.com/images/M/MV5BMzU1MzAyNzUtY2FlZi00YTg1LTg2OGQtZjZjYzg3YWVlNGMyXkEyXkFqcGdeQW1yb2Njbw@@._V1_.jpg"
    >
      <Container maxWidth="md" sx={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 4, p: 4 }}>
        <HomeHeader />
        <HomeDescription />
        <CustomButton to="/heroes" text="Go to Heroes" />
      </Container>
    </MainContainer>
  );
};

export { Home };

