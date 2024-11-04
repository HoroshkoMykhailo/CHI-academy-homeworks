import React from "react";
import { ProtectedRoute } from "~/components/components";
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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.STRIPE} element={<StripePage />} />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.REGISTER} element={<RegisterPage />} />
        <Route
          path={AppRoute.HOME}
          element={
            <ProtectedRoute isAllowed={true}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoute.NEW_POST}
          element={
            <ProtectedRoute isAllowed={true}>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route path={AppRoute.ANY} element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
