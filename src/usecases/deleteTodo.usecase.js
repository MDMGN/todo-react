import { URL_TODOS } from "../config/api";
import { http } from "../helpers/helpers";
import loginUseCase from "./login.usecase";

export default async function deleteTodoUseCase(id, accessToken) {
  try {
    const response = await http({
      url: `${URL_TODOS}/${id}`,
      method: "DELETE",
      token: accessToken,
    });
    return response.data;
  } catch (error) {
    if (error.code === 401) {
      const token = await loginUseCase();
      const deleteTodo = await deleteTodoUseCase(id, token);
      return deleteTodo;
    }
  }
  throw new Error("No se ha podido eliminar el todo");
}
