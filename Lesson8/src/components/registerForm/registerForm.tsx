import React from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "~/constants/constants";

interface RegisterFormProps {
    onSubmit: (username: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const navigate = useNavigate();
  
    return (
      <FormComponent
        buttonLabel="Register"
        linkText="Already have an account? Register"
        onLinkClick={() => navigate(AppRoute.LOGIN)}
        onSubmit={onSubmit}
      />
    );
  };

export { RegisterForm };