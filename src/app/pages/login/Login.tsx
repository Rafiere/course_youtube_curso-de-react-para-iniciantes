import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../login-componentizado/components/ButtonLogin";

export const Login = () => {
  /* É recomendado utilizarmos o "useNavigate" para navegarmos de página usando o RRD6, que é a forma correta ao utilizarmos o React, ou seja, sem recarregarmos a página. */
  const navigate = useNavigate();

  /* Se não utilizarmos as funções disponibilizadas pelo hook "useState", o componente não será renderizado corretamente. */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate("/dashboard");
  };

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

  /* O "useMemo" serve para evitarmos cálculos desnecessários a cada renderização do componente. O "useMemo" é executado durante a atualização do componente, enquanto que o "useEffect" é executado após a renderização do componente, ou seja, com o objetivo de atualizar o estado do componente ou efeitos colaterais. */
  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  /* O "useCallback" será executado quando o componente é renderizado pela primeira vez. Ele guardará essa função em memória. Se alterarmos algum "state" e esse "state" não estiver no array de dependências, essa função NÃO SERÁ RECONSTRUÍDA, deixando a aplicação mais performática.*/
  const handleLogin = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  /* Quando o componente "Login" for carregado, estamos utilizando um "useRef" que inicia como nulo. Basicamente, o parâmetro "ref" do atributo "input" está atribuindo a referência para aquele componente para dentro do "inputPasswordRef". Assim, podemos, por exemplo, obter o "current" de dentro de alguma função, como um   "useCallback", por exemplo.*/

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleLogin2 = useCallback(() => {
    console.log(email);
    console.log(password);

    /* Estamos pegando a referência do componente HTML e usando ela, assim, quando essa função for executada, o componente "passwordRef" será focado. */
    if (inputPasswordRef.current !== null) {
      console.log(inputPasswordRef.current.focus());
    }
  }, [email, password]);

  const handleSignUp = useCallback(() => {
    console.log("Realizando o cadastro...");
  }, []);

  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleClick}>Ir para Dashboard</button>

      <p>Quantidade de caracteres no email: {email.length}</p>

      <form>
        <label>
          <span>Email</span>
          {/* Estamos pegando o valor do "input" e atribuindo ao "state". */}

          {/* Se a tecla pressionada for o "Enter", mudaremos o foco para a input de senha. */}
          <input
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPasswordRef.current?.focus : undefined
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={inputPasswordRef}
          />
        </label>

        {/* Se deixássemos o tipo do botão como "submit", o "reload" seria feito na página. */}
        <ButtonLogin type="button" onClick={handleLogin}>
          Sign In
        </ButtonLogin>

        <ButtonLogin type="button" onClick={handleSignUp}>
          Sign Up
        </ButtonLogin>
      </form>
    </div>
  );
};
