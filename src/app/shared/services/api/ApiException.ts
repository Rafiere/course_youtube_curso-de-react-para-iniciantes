/* Essa classe de erro genérica será utilizada para gerenciarmos os erros da API. */
export class ApiException extends Error {
  public readonly message: string = "";
  constructor(message: string) {
    super();

    this.message = message;
  }
}
