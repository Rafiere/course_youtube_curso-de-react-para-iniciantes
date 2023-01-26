import React from "react";
import AppRoutes from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

const App = () => {
  return (
    /* Todas as rotas da aplicação terão acesso ao contexto do "UsuarioLogadoProvider". */
    <UsuarioLogadoProvider>
      <AppRoutes />;
    </UsuarioLogadoProvider>
  );
};

export default App;
