'use client'
import React, { useEffect, useState } from "react";
import { FormComponent } from "~/components/components";
import { AppRoute, DataStatus } from "~/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { UserRequest } from "~/types/types";
import { register } from "~/store/slices/userSlice";
import { AppDispatch, RootState } from "~/store/store";
import { showNotification } from "~/store/slices/notificationSlice";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { dataStatus, message } = useSelector((state: RootState) => state.user);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = async ({ username, password }: UserRequest) => {
      await dispatch(register({ username, password }));
      setIsRegistered(true);
    };

    useEffect(() => {
      if (!isRegistered) {
        return;
      }
      else{
        setIsRegistered(false);
      }
      if (dataStatus === DataStatus.REJECTED) {
        dispatch(showNotification({
          message: message,
          severity: "error",
        }));
      }
      else if(dataStatus === DataStatus.FULFILLED) {
        dispatch(showNotification({
          message: message,
          severity: "success",
        }));
        router.push(AppRoute.LOGIN);
      }
    }, [isRegistered]);
    
    return (
      <FormComponent
        buttonLabel="Register"
        linkText="Already have an account? Login"
        onLinkClick={() => router.push(AppRoute.LOGIN)}
        onSubmit={handleRegister}
      />
    );
  };

export { RegisterForm };