import React from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "~/constants/constants";
interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const navigate = useNavigate();
  
    return (
      <FormComponent
        buttonLabel="Login"
        linkText="Don't have an account? Register"
        onLinkClick={() => navigate(AppRoute.REGISTER)}
        onSubmit={onSubmit}
      />
    );
  };

export { LoginForm };