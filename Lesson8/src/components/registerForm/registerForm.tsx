import React, { useEffect } from "react";
import { FormComponent } from "~/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute, DataStatus } from "~/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { UserRequest } from "~/types/types";
import { register } from "~/store/slices/userSlice";
import { AppDispatch, RootState } from "~/store/store";
import { showNotification } from "~/store/slices/notificationSlice";

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { dataStatus } = useSelector((state: RootState) => state.user);

    const handleRegister = ({ username, password }: UserRequest) => {
      dispatch(register({ username, password }));
    };

    useEffect(() => {
      if (dataStatus === DataStatus.REJECTED) {
        dispatch(showNotification({
          message: "Incorrect credentials",
          severity: "error",
        }));
      }
      else if(dataStatus === DataStatus.FULFILLED) {
        dispatch(showNotification({
          message: "Registered successfully",
          severity: "success",
        }));
        navigate(AppRoute.LOGIN);
      }
    }, [dataStatus, dispatch]);
    
    return (
      <FormComponent
        buttonLabel="Register"
        linkText="Already have an account? Login"
        onLinkClick={() => navigate(AppRoute.LOGIN)}
        onSubmit={handleRegister}
      />
    );
  };

export { RegisterForm };