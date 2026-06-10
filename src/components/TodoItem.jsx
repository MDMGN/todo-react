export default function TodoItem({ todo }) {
  const { title } = todo;

  return <li>{title}</li>;
}
