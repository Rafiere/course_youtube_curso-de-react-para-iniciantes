/* Esse é o arquivo de configuração do Axios. */

import axios from "axios";

export const Api = () => {
  /* Estamos criando uma instância do Axios e passando um objeto com essas configurações. */
  return axios.create({
    /* Aqui teremos a URL base em que as requisições serão realizadas. */
    baseURL: "http://localhost:4000",
  });
};
