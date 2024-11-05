import React from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "~/constants/constants";
import { useDispatch } from "react-redux";
import { UserRequest } from "~/types/types";
import { register } from "~/store/slices/userSlice";
import { AppDispatch } from "~/store/store";

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    
    const handleRegister = ({ username, password }: UserRequest) => {
      alert("User successfully registered!");
      dispatch(register({ username, password }));
      navigate(AppRoute.LOGIN);
    };
    
    return (
      <FormComponent
        buttonLabel="Register"
        linkText="Already have an account? Register"
        onLinkClick={() => navigate(AppRoute.LOGIN)}
        onSubmit={handleRegister}
      />
    );
  };

export { RegisterForm };