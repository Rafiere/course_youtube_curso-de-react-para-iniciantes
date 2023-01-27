import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

interface ListItemProps {
  id: number;
  title: string;
  isSelected: boolean;
}

/* Esse será o componente que representará uma página. */

export const Dashboard = () => {
  /* Sempre que quisermos armazenar algum tipo de valor e alterar esse valor conforme uma ação do usuário, porém, não queremos realizar o fluxo de re-rendering, podemos utilizar o "useRef" da forma abaixo. */

  /* No exemplo abaixo, quando clicarmos no botão "Somar", o valor da constante "counterRef" será alterada, porém, o contador não será alterado na exibição para o usuário, pois, como não estamos utilizando um estado, a UI não está sendo renderizada a cada alteração nesse estado. */
  const counterRef = useRef({ counter: 0 });

  /* Estamos obtendo os dados do contexto do usuário logado. */
  // const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  /* Estamos usando um hook customizado para obtermos o contexto do usuário logado. */
  const usuarioLogadoContext = useUsuarioLogado();

  const [lista, setLista] = useState<string[]>([]);
  const [listaObjetos, setListaObjetos] = useState<ListItemProps[]>([]);

  /* O "callback" do "handleEnter" receberá um objeto que é um evento de teclado, assim, estamos tipando esse objeto corretamente. */
  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        /* Se o valor for igual a 0, o usuário não digitou nada, assim, a função será cancelada. */
        if (e.currentTarget.value.trim().length === 0) {
          return;
        }
        /* Estamos criando uma nova lista, utilizando todos os valores existentes na lista anterior. É sempre recomendado fazermos dessa forma para que, se tivermos muitas inserções, tenhamos o state atualizado.*/

        const valorNovo = e.currentTarget.value;

        // /* Estamos limpando o valor da input. Poderíamos utilizar um estado, se necessário. */
        // e.currentTarget.value = "";

        setLista((listaAntiga) => {
          return [...listaAntiga, valorNovo];
        });
      }
    },
    []
  );

  const handleEnter2: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) {
          return;
        }

        const valorNovo = e.currentTarget.value;

        e.currentTarget.value = "";

        setListaObjetos((listaAntiga) => {
          if (listaAntiga.some((listItem) => listItem.title === valorNovo)) {
            return listaAntiga;
          }
          return [
            ...listaAntiga,
            {
              id: listaAntiga.length,
              title: valorNovo,
              isSelected: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <h1>Página de Dashboard</h1>
      {/* Com a tag "Link", podemos nos mover de uma página para a outra SEM PRECISARMOS RECARREGAR A PÁGINA. */}
      <Link to={"/login"}>Ir para Login</Link>

      <p>Usuário Logado: {usuarioLogadoContext.nomeDoUsuario}</p>

      <div>
        <input
          onKeyDown={(e) => {
            handleEnter(e);
            handleEnter2(e);
          }}
        />

        <p>Lista</p>
        <ul>
          {lista.map((item, index) => {
            return (
              <li>
                {index}
                {" - " + item}
              </li>
            );
          })}
        </ul>

        <p>Lista de Objetos:</p>
        <ul>
          {listaObjetos.map((elementoLista) => {
            return (
              <li>
                <p>{elementoLista.title}</p>
                <input
                  type="checkbox"
                  onChange={() => {
                    setListaObjetos((listaAntiga) => {
                      return listaAntiga.map((itemLista) => {
                        const newIsSelected =
                          itemLista.title === elementoLista.title
                            ? !itemLista.isSelected
                            : itemLista.isSelected;
                        return {
                          ...itemLista,
                          isSelected: newIsSelected,
                        };
                      });
                    });
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Somar</button>
      <button onClick={() => usuarioLogadoContext.logout()}>Logout</button>
    </div>
  );
};
