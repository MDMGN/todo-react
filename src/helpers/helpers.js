export function DateFormat(lang, date) {
  return new Intl.DateTimeFormat(lang, {
    dateStyle: "long",
  }).format(new Date(date));
}

export async function http({ url, token, method = "GET", body }) {
  return fetch(url, {
    method,
    body,
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  }).then((response) =>
    response.ok
      ? response.json()
      : Promise.reject({ data: response.json() , code: response.status }),
  );
}
