/* Cada arquivo na pasta "contexts" representará um único contexto. Podemos ter vários contextos dentro de uma aplicação React. */

import React, { createContext, useCallback, useEffect, useState } from "react";

/* Essa é a interface que REPRESENTA OS DADOS COMPARTILHADOS DO CONTEXTO. */
interface UsuarioLogadoContextData {
  nomeDoUsuario: string;
  /* Estamos compartilhando uma função que desloga o usuário pelo contexto. */
  logout: () => void;
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
  const [nome, setNome] = useState("");

  /* Essa função está simulando o logout na página e está sendo disponibilizada através do contexto. */
  const handleLogout = useCallback(() => {
    console.log("Logout...");
  }, []);

  useEffect(() => {
    /* Após 1 segundo que o componente foi alterado, o valor do estado será alterado, também. Isso pode simular uma chamada de API. */
    setTimeout(() => {
      setNome("Lucas");
    }, 1000);
  });

  return (
    <UsuarioLogadoContext.Provider
      value={{
        nomeDoUsuario: nome,
        logout: handleLogout,
      }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
