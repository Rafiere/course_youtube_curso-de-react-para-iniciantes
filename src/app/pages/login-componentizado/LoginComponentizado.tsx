import React, { useRef, useState } from "react";
import InputLogin from "./components/InputLogin";

export const LoginComponentizado = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Quando utilizamos um componente customizado do React, não conseguimos pegar a referência dele através do hook "useRef", por isso, temos que usar o hook "useForwardRef"*/
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  /* Basicamente, o "useForwardRef" é semelhante ao "useRef", mas ele é utilizado quando precisamos passar uma  */

  return (
    <div>
      <form>
        <InputLogin
          label="Login"
          value={email}
          onChange={(novoValor) => setEmail(novoValor)}
          /* Estamos usando a referência ao input de password aqui. */
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          /* Como temos um componente customizado, e não uma tag HTML, estamos passando essa referência para dentro desse componente, e, dentro desse componente, através do "forwardRef", estamos passando essa referência para o elemento HTML "input". */
          ref={inputPasswordRef}
          type="password"
          label="Password"
          value={password}
          onChange={(novoValor) => setPassword(novoValor)}
        />
        <button></button>
      </form>
    </div>
  );
};
