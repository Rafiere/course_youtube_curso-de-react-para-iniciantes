/* Cada arquivo na pasta "contexts" representará um único contexto. Podemos ter vários contextos dentro de uma aplicação React. */

import React, { createContext } from "react";

/* Essa é a interface que REPRESENTA OS DADOS COMPARTILHADOS DO CONTEXTO. */
interface UsuarioLogadoContextData {
  nomeDoUsuario: string;
}

/* Essa props foi criada apenas para passarmos o "children". O "children" não fará parte dos dados compartilhados pelo contexto, apenas representará os componentes que forem passados dentro desse provider. */
interface UsuarioLogadoContextProps {
  children: React.ReactNode;
}

/* Abaixo, vamos criar um contexto. Os dados abaixo poderão ser compartilhados entre diversas páginas. */

/* O "as" representa que esse objeto vazio será do tipo da interface. */
export const UsuarioLogadoContext = createContext(
  {} as UsuarioLogadoContextData
);

/* O componente abaixo será o PROVEDOR de um contexto. */

/* Esse contexto compartilhará as informações que ele armazena com todo mundo que ele tiver como filhos. */
export const UsuarioLogadoProvider = ({
  children,
}: UsuarioLogadoContextProps) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Lucas" }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
