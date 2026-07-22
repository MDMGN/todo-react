import { URL_LOGIN } from "../config/api";
import { http } from "../helpers/helpers";

export default async function loginUseCase() {
  const params = new URLSearchParams({
    email: "michaelmdvr@gmail.com",
    password: "ABCabc123!",
  });

  try {
    const response = await http({
      url: URL_LOGIN,
      method: "POST",
      body: params,
    });

    return response.data.token;
  } catch (err) {
    console.error(err);
  }
}
