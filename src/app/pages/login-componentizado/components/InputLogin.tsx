import { forwardRef } from "react";

/* Essa interface representará os atributos que o componente poderá receber. */
interface InputLoginProps {
  label: string;
  value: string;
  type?: string;

  /* Receberemos o valor na input de email, e repassaremos o valor alterado para a input. */
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

/* Ao utilizarmos o "forwardRef", temos acesso à propriedade "ref", que pode ser passado como parâmetro para esse componente. */
/* Como estamos utilizando o "forwardRef", o primeiro parâmetro tem que ser o tipo do componente em que estamos inserindo a referência, que é o "input", e o segundo parâmetro é o tipo das propriedades que estão sendo passadas para esse componente. */
const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}</span>
        {/* Estamos passando o "ref" para a "input" porque ela é o elemento que queremos buscar a referência. */}
        <input
          ref={ref}
          type={props.type}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? /* Se a função for DIFERENTE de undefined, ela será executada. */
                props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);

export default InputLogin;
