/* Dentro desse componente, teremos todas as rotas da aplicação. */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<h1>Página não encontrada!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
