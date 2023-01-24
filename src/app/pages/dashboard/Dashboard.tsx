import React from "react";
import { Link } from "react-router-dom";

/* Esse será o componente que representará uma página. */

export const Dashboard = () => {
  return (
    <div>
      <h1>Página de Dashboard</h1>
      {/* Com a tag "Link", podemos nos mover de uma página para a outra SEM PRECISARMOS RECARREGAR A PÁGINA. */}
      <Link to={"/login"}>Ir para Login</Link>
    </div>
  );
};
