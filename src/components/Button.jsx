export default function Button({ onClick, title }) {
  console.log("Renderizando Button...");
  return <button onClick={onClick}>{title}</button>;
}
