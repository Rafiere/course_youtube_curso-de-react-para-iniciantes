/* Dentro desse arquivo, temos um React Hook customizado. */

import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts";

/* Um hook é uma função que possui um hook dentro dela. */

/* Criando esse Hook, ao invés de importarmos o "useContext" e o contexto, temos apenas que importar o "useUsuarioLogado", assim, diminuiremos a quantidade de imports utilizados. */
export const useUsuarioLogado = () => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  return usuarioLogadoContext;
};
