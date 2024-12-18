'use client';
import React from "react";
import { Box } from "@mui/material";
import { RegisterForm } from "~/components/components";

const RegisterPage: React.FC = () => {
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
      <RegisterForm/>
    </Box>
  );
};

export default RegisterPage;