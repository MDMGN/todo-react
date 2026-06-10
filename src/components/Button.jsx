export default function Button({ onClick, title, color }) {
  console.log("Renderizando Button...");
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {title}
    </button>
  );
}
