import React, { useEffect } from "react";
import { CustomAlert, ProtectedRoute } from "~/components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "~/constants/constants";
import {
  HomePage,
  LoginPage,
  NewPost,
  NotFound,
  RegisterPage,
  StripePage,
} from "./layouts/layouts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";
import { fetch } from "~/store/slices/userSlice";

const App: React.FC = () => {
  const isAllowed = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetch());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.STRIPE} element={<StripePage />} />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.REGISTER} element={<RegisterPage />} />
        <Route
          path={AppRoute.HOME}
          element={
            <ProtectedRoute isAllowed={isAllowed}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoute.NEW_POST}
          element={
            <ProtectedRoute isAllowed={isAllowed}>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route path={AppRoute.ANY} element={<NotFound />} />
      </Routes>
      <CustomAlert />
    </Router>
  );
};

export default App;
