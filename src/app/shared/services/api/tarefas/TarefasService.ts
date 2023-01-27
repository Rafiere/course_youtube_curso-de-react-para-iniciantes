/* Aqui dentro teremos os endpoints relacionados à tarefas. Aqui, basicamente, será um agrupador de funções. */

import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface ListItemProps {
  id: number;
  title: string;
  isSelected: boolean;
}

const getAll = async (): Promise<ListItemProps[] | ApiException> => {
  /* Se algum erro ocorrer, o "try-catch" capturará esse erro. */
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar os registros.");
  }
};

const getById = async (id: number): Promise<ListItemProps | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a registro.");
  }
};

/* Estamos omitindo o "id", pois o ID será gerado pelo back-end, e não pelo front-end. */
const create = async (
  dataToCreate: Omit<ListItemProps, "id">
): Promise<ListItemProps | ApiException> => {
  try {
    const { data } = await Api().post("/tarefas", dataToCreate);

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao criar o registro.");
  }
};

const updateById = async (
  id: string,
  dataToUpdate: ListItemProps
): Promise<ListItemProps | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`);

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao atualizar o registro.");
  }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    await Api().get(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao deletar o registro.");
  }
};

/* Aqui dentro, estamos agrupando todas as chamadas para a API. */
export const TarefasService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
