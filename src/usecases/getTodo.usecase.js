import { URL_TODOS } from "../config/api";
import { http } from "../helpers/helpers";
import loginUseCase from "./login.usecase";

export default async function getTodoUseCase(id) {
  try {
    const token = await loginUseCase();
    const response = await http({
      url: `${URL_TODOS}/${id}`,
      token,
    });

    return response;
  } catch (error) {
    console.log({ error });
    return null;
  }
}
