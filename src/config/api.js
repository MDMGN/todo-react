const PORT = 3000,
  BASE_URL = `http://localhost:${PORT}`,
  URL_TODOS = `${BASE_URL}/todos`,
  URL_AUTH = `${BASE_URL}/auth`,
  URL_LOGIN = `${URL_AUTH}/login`,
  URL_REGISTER = `${URL_AUTH}/register`;

export { URL_TODOS, URL_LOGIN, URL_REGISTER };
