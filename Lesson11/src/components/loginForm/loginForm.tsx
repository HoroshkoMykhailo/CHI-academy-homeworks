'use client';
import React, { useEffect } from "react";
import { FormComponent } from "~/components/components";
import { AppRoute, DataStatus } from "~/constants/constants";
import { UserRequest } from "~/types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";
import { login } from "~/store/slices/userSlice";
import { showNotification } from "~/store/slices/notificationSlice";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated, dataStatus, message } = useSelector((state: RootState) => state.user);

    const handleLogin = async ({ username, password }: UserRequest) => {
      await dispatch(login({ username, password }));
    };

    useEffect(() => {
      if (isAuthenticated) {
        router.push(AppRoute.STRIPE);
      }
    }, [isAuthenticated, router]);

    useEffect(() => {
      if (dataStatus === DataStatus.REJECTED) {
        dispatch(showNotification({
          message: message,
          severity: "error",
        }));
      }
    }, [dataStatus]);

    return (
        <FormComponent
          buttonLabel="Login"
          linkText="Don't have an account? Register"
          onLinkClick={() => router.push(AppRoute.REGISTER)}
          onSubmit={handleLogin}
        />
    );
  };

export { LoginForm };