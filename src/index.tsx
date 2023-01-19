import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* O "render" fará com que a aplicação seja carregada. */

/* O ReactDOM renderizará a aplicação inteira dentro de uma <div> com o ID "root". */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
