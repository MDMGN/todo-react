import { URL_TODOS } from "../config/api";
import { http } from "../helpers/helpers";
import loginUseCase from "./login.usecase";

export default async function updateTodoUseCase(id, accessToken, data) {
  try {
    const response = await http({
      url: `${URL_TODOS}/${id}`,
      body: new URLSearchParams(data),
      token: accessToken,
      method: "PUT",
    });
    return response.data;
  } catch (error) {
    if (error.code === 401) {
      const token = await loginUseCase();
      const updatedTodo = await updateTodoUseCase(id, token, data);
      return updatedTodo;
    }
  }

  throw new Error("El todo no se ha podido actualizar");
}
