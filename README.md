# AULA 01 - COMEÇANDO COM REACTJS

Em todos os sistemas operacionais, sejam eles o `Linux`, o `Windows` ou o `Mac`, o requisito para executarmos o React será o mesmo.

O React é uma biblioteca JavaScript. Ele precisa apenas do `node` para ser executado corretamente.

O React garante a criação de componentes. Um componente nada mais é do que uma função que pode ser reutilizada.

## INICIALIZANDO UMA APLICAÇÃO

Podemos utilizar o comando `npx create-react-app nome-da-app --template typescript` para criarmos uma aplicação base em React utilizando o TypeScript.

Para utilizarmos o Yarn como o gerenciador de dependências da aplicação, podemos utilizar o comando `npm install -g yarn`.

Após isso, basta utilizarmos o comando `yarn install && yarn start`.

O `React DOM` vai renderizar a aplicação inteira dentro de uma `div` com o ID `root`.

Quando utilizamos, dentro de um arquivo `.tsx`, a notação `import ./nome-do-arquivo.css`, o React entende que estamos aplicando esse CSS ao arquivo atual.

# AULA 02 - REMOVENDO ARQUIVOS DESNECESSÁRIOS

Nessa aula, foram removidos apenas alguns arquivos desnecessários.

# AULA 03 - ESTRUTURA DE PASTAS

Uma aplicação `SPA` é uma aplicação em que todas as páginas dessa aplicação serão carregadas dentro do arquivo `index.html` através do JavaScript.

# AULA 04 - COMPONENTES E PÁGINAS

O React é uma aplicação que sugere o uso de componentes reutilizáveis entre as páginas da aplicação.

No React, um componente é uma função que agrupa determinados elementos de uma interface, assim, podemos, inclusive, agrupar um componente dentro de outro.

Basicamente, uma função é **todo componente que retorna um HTML**.

# AULA 06 - USANDO O USESTATE DE FORMA CORRETA

Sempre que atualizamos um estado através da função "useState", o React re-renderizará o componente, assim, o bloco de código desse componente será executado novamente.

Se atualizarmos um estado a cada modificação de um "onChange", o bloco desse componente em que o estado será inserido, será executado a cada modificação.

# AULA 07 - USANDO O USEEFFECT DE FORMA CORRETA

O hook "useEffect" é utilizado para executarmos **efeitos colaterais em componentes funcionais**.

Por exemplo, se quisermos mostrar para o usuário uma mensagem quando o componente for renderizado, podemos usar o "useEffect".

O "effect" possui um relacionamento direto com as dependências que são informadas dentro dele, assim, esse bloco de código será executado apenas se as dependências dele forem utilizadas.

Ele impede que todas as vezes que alteremos um estado, um bloco de código seja executado novamente.

Se o array de dependências estiver vazio, o código será executado apenas quando executarmos o componente.
