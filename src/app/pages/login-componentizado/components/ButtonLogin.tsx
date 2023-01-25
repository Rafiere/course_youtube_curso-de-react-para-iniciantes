import { on } from "events";
import React from "react";

interface ButtonLoginProps {
  /* Estamos usando uma "union" do TypeScript. */
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  /* Tudo o que passamos dentro do "<button></button>" é um "children". */
  children: React.ReactNode;
}

const ButtonLogin = (props: ButtonLoginProps) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonLogin;
