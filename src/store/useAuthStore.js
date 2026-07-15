import { create } from "zustand";
import { http } from "../helpers/helpers";
import { URL_LOGIN } from "../config/api";

const useAuthStore = create((set, get) => ({
  token: null,
  login: async () => {
    http({
      url: URL_LOGIN,
      method: "POST",
      body: new URLSearchParams({
        email: "michaelmdvr@gmail.com",
        password: "ABCabc123!",
      }),
      cbError: (err) => console.error(err),
      cbSuccess: ({ data }) => set({ token: data.token }),
    }).finally(() => console.log(get().token));
  },
}));
export default useAuthStore;
