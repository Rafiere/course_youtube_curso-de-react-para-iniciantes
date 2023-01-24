import React, { useRef } from "react";
import { Link } from "react-router-dom";

/* Esse será o componente que representará uma página. */

export const Dashboard = () => {
  /* Sempre que quisermos armazenar algum tipo de valor e alterar esse valor conforme uma ação do usuário, porém, não queremos realizar o fluxo de re-rendering, podemos utilizar o "useRef" da forma abaixo. */

  /* No exemplo abaixo, quando clicarmos no botão "Somar", o valor da constante "counterRef" será alterada, porém, o contador não será alterado na exibição para o usuário, pois, como não estamos utilizando um estado, a UI não está sendo renderizada a cada alteração nesse estado. */
  const counterRef = useRef({ counter: 0 });

  return (
    <div>
      <h1>Página de Dashboard</h1>
      {/* Com a tag "Link", podemos nos mover de uma página para a outra SEM PRECISARMOS RECARREGAR A PÁGINA. */}
      <Link to={"/login"}>Ir para Login</Link>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Somar</button>
    </div>
  );
};
