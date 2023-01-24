import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  /* É recomendado utilizarmos o "useNavigate" para navegarmos de página usando o RRD6, que é a forma correta ao utilizarmos o React, ou seja, sem recarregarmos a página. */
  const navigate = useNavigate();

  /* Se não utilizarmos as funções disponibilizadas pelo hook "useState", o componente não será renderizado corretamente. */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleLogin = () => {};

  /* Esse bloco de código será executado apenas quando o componente "Login", ou seja, a página "Login" for carregada. */
  useEffect(() => {
    console.log("Você é homem!");
  }, []);

  /* A cada vez que o estado do "email" ou do "password" for alterado, essa função será exibida. */
  useEffect(() => {
    console.log("Email: " + email + " Password: " + password);
  }, [email, password]);

  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleClick}>Ir para Dashboard</button>

      <form>
        <label>
          <span>Email</span>
          {/* Estamos pegando o valor do "input" e atribuindo ao "state". */}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/* Se deixássemos o tipo do botão como "submit", o "reload" seria feito na página. */}
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};
