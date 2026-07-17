import { URL_TODOS } from "../config/api";
import { http } from "../helpers/helpers";
import loginUseCase from "./login.usecase";

export default async function getTodosUseCase(token) {
  try {
    const todos = await http({ url: URL_TODOS, token });
    return todos;
  } catch (err) {
    if (err.code === 401) {
      const token = await loginUseCase();
      const todos = await getTodosUseCase(token);
      return todos;
    }
  }
  throw new Error("No se han podido cargar los todos");
}
