import { URL_LOGIN } from "../config/api";
import { http } from "../helpers/helpers";

export default async function loginUseCase() {
  try {

    const response = await http({
      url: URL_LOGIN,
      method: "POST",
      body: new URLSearchParams({
        email: "michaelmdvr@gmail.com",
        password: "ABCabc123!",
      }),
    });
    
    return response.data.token;

  } catch (err) {
    console.error(err);
  }
}
