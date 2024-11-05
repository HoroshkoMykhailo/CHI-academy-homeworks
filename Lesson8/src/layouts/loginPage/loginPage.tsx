import React from "react";
import { LoginForm } from "~/components/components";
import { Box } from "@mui/material";

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log("Logging in with:", username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export { LoginPage };