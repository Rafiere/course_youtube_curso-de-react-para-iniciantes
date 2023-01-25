/* Dentro desse componente, teremos todas as rotas da aplicação. */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import { LoginComponentizado } from "../pages/login-componentizado/LoginComponentizado";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/component-login"
          element={<LoginComponentizado />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<h1>Página não encontrada!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
