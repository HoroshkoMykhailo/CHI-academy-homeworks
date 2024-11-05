import React from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "~/constants/constants";
import { UserRequest } from "~/types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "~/store/store";
import { login } from "~/store/slices/userSlice";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch<AppDispatch>();
    
    const handleRegister = ({ username, password }: UserRequest) => {
      dispatch(login({ username, password }));
      navigate(AppRoute.STRIPE);
    };

    return (
      <FormComponent
        buttonLabel="Login"
        linkText="Don't have an account? Register"
        onLinkClick={() => navigate(AppRoute.REGISTER)}
        onSubmit={handleRegister}
      />
    );
  };

export { LoginForm };