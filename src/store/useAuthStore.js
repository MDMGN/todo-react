import { create } from "zustand";

import loginUseCase from "../usecases/login.usecase";

const useAuthStore = create((set) => ({
  token: null,
  login: async () => {
    try {
      const token = await loginUseCase();
      set({ token });
    } catch (err) {
      console.error(err);
    }
  },
}));
export default useAuthStore;
