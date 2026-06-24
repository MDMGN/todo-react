export function DateFormat(lang, date) {
  return new Intl.DateTimeFormat(lang, {
    dateStyle: "long",
  }).format(new Date(date));
}
