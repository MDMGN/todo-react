import { URL_TODOS } from "../config/api";
import { http } from "../helpers/helpers";
import loginUseCase from "./login.usecase";

export default async function addTodoUseCase({ title, accessToken }) {
  try {
    const response = await http({
      url: URL_TODOS,
      token: accessToken,
      method: "POST",
      body: new URLSearchParams({ title }),
    });
    return response.data;
  } catch (error) {
    if (error.code === 401) {
      const token = await loginUseCase();
      const todos = await addTodoUseCase({ accessToken: token, title });
      return todos;
    }
  }
  throw new Error("No se ha podido crear el nuevo todo");
}
