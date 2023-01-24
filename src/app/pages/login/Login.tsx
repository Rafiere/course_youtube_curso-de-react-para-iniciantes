import { useEffect, useMemo, useState } from "react";
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

  /* O hook "useMemo" executará uma operação sempre que uma dependência for alterada. */

  /* Na primeira vez que o componente for renderizado, essa função será executada e o "emailLength" será calculado, após isso, o cálculo dessa função será feito novamente apenas se o estado de uma das dependências for alterado. No exemplo acima, estamos usando o "email.length" como uma dependência. */

  /* Se o array de dependências estiver vazio, o "useMemo" será executado a cada renderização do componente. */

  /* Basicamente, o "useMemo" deve ser utilizado quando fazemos cálculos que NÃO ESTÃO, NECESSARIAMENTE, NO ESTADO DO COMPONENTE, COMO VALIDAÇÕES OU MÉTODOS QUE USAM O VALOR DE UM ESTADO E RETORNAM UM OUTRO DETERMINADO VALOR, como o exemplo abaixo, que calcula a quantidade de caracteres do email e multiplica por
  1000, esse valor não deve ter um estado só para ele, dessa forma, estamos usando o useMemo. O "useMemo" é executado DURANTE a renderização do componente, enquanto que o "useEffect()" torna o novo valor disponível APÓS a renderização. */
  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleClick}>Ir para Dashboard</button>

      <p>Quantidade de caracteres no email: {email.length}</p>

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
