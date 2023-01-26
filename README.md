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

# AULA 08 - USANDO O USEMEMO

useMemo é uma hook do React que permite memorizar o resultado de uma função, evitando a execução desnecessária da mesma quando nenhuma das dependências foram alteradas. Ele é útil quando você tem cálculos que não precisam ser armazenados como estado, mas precisam ser executados apenas quando as dependências mudarem. Alguns casos comuns de uso incluem:

- Quando você tem um cálculo que é caro em termos de desempenho e não precisa ser executado a cada renderização.
- Quando você precisa calcular um valor baseado em algum estado ou props do componente, mas esse valor não precisa ser armazenado como estado.
- Quando você precisa retornar algo diferente de um componente ou função, como um objeto ou array.

Em resumo, o useMemo é uma ferramenta para otimizar o desempenho do seu componente, evitando cálculos desnecessários e mantendo a performance do componente.

# AULA 09 - USANDO O USECALLBACK

O "useCallback()" é um hook usado, principalmente, para melhorarmos a performance da aplicação.

O "useCallback()" é feito para, principalmente, memorizarmos funções.

Todas as vezes que um state é alterado, o componente inteiro é reconstruído. Esse é o funcionamento normal do React, porém, uma constante que recebe uma variável será atribuída cada vez que o componente for renderizado.

O "useCallback()" fará com que uma função NÃO SEJA RECONSTRUÍDA TODAS AS VEZES QUE UM STATE FOR ALTERADO.

# AULA 10 - USANDO O USEREF COM ELEMENTOS HTML

O "useRef()" permite que armazenemos valor dentro de uma variável, e esses valores não serão alterados conforme o componente é renderizado.

# AULA 13 - USANDO FORWARDREF

`forwardRef` é uma função fornecida pelo React que permite passar uma referência de um componente para outro componente. Isso é útil quando você precisa garantir que um componente filho tenha acesso ao estado ou aos métodos de um componente pai.

Ao passar uma referência para um componente, você pode chamar métodos ou acessar estados desse componente a partir do componente filho. Isso pode ser útil em situações em que você precisa garantir que o componente filho tenha acesso ao estado ou aos métodos do componente pai. Ele é usado como uma forma de acessar dados de componentes de nível superior sem passar esses dados como props toda vez.

Para utilizar o `forwardRef` é preciso criar uma referencia com o `useRef` no componente pai e passa-la como props para o componente filho, que por sua vez usa essa referencia para acessar o estado ou métodos do componente pai.

Em resumo, o forwardRef é uma técnica para passar uma referência de um componente para outro, garantindo que o componente filho tenha acesso ao estado ou aos métodos do componente pai, sem precisar passar esses dados como props toda vez.

# AULA 15 - USANDO A API DE CONTEXT

No React, o contexto é utilizado para **compartilhar informações entre diversos componentes ou diversas páginas**.

Podemos, por exemplo, criar algo em volta das páginas, para que a informação seja compartilhada em vários lugares.

# AULA 17 - CRIANDO UM REACT HOOK CUSTOMIZADO

Um React Hook é **uma função que possui um hook do React dentro dela**.
