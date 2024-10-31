import React from "react";
import { MainContainer, CustomButton } from "../../components/components";
import { CustomTypography } from "./components/customTypography";

const NotFound: React.FC = () => {
    return (
      <MainContainer backgroundImage="https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg">
        <CustomTypography
        text="404"
        variant="h1"
        mb={2} 
        sx={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      />
      <CustomTypography
        text="Not Found"
        variant="h4"
      />
      <CustomTypography
        text="Oops! The page you are looking for does not exist"
        variant="h5"
      />
      <CustomButton to="/" text="Go Home" fullWidth sx = {{ maxWidth: "20%"}} />
      </MainContainer>
    );
  };
export { NotFound };