import React, { useEffect } from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute, DataStatus } from "~/constants/constants";
import { UserRequest } from "~/types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";
import { login } from "~/store/slices/userSlice";
import { showNotification } from "~/store/slices/notificationSlice";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    
    const { isAuthenticated, dataStatus } = useSelector((state: RootState) => state.user);

    const handleLogin = ({ username, password }: UserRequest) => {
      dispatch(login({ username, password }));
    };

    useEffect(() => {
      if (isAuthenticated) {
        navigate(AppRoute.STRIPE);
      }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
      if (dataStatus === DataStatus.REJECTED) {
        dispatch(showNotification({
          message: "Incorrect username or password",
          severity: "error",
        }));
      }
    }, [dataStatus, dispatch]);

    return (
        <FormComponent
          buttonLabel="Login"
          linkText="Don't have an account? Register"
          onLinkClick={() => navigate(AppRoute.REGISTER)}
          onSubmit={handleLogin}
        />
    );
  };

export { LoginForm };