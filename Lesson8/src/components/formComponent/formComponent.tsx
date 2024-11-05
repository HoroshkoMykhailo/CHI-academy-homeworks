import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { StyledTextField } from '~/components/components';
import { Colors } from "~/constants/constants";
import { UserRequest } from "~/types/types";

interface FormComponentProps {
  buttonLabel: string;
  linkText: string;
  onLinkClick: () => void;
  onSubmit: (userData: UserRequest) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ buttonLabel, linkText, onLinkClick, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({username, password});
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "500px",
      }}
    >
      <StyledTextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <StyledTextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: Colors.buttonColor,
          color: Colors.textPrimary,
          "&:hover": {
            backgroundColor: "#A8D88C",
          },
        }}
        fullWidth
      >
        {buttonLabel}
      </Button>
      <Typography
        onClick={onLinkClick}
        sx={{
          cursor: "pointer",
          mt: 2,
          color: Colors.textPrimary,
          "&:hover": { color: "#39A0ED" },
        }}
      >
        {linkText}
      </Typography>
    </Box>
  );
};

export { FormComponent }