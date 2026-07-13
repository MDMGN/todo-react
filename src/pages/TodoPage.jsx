import { useParams } from "react-router-dom";
import EmptyMessage from "../components/EmptyMessage";
import { DateFormat } from "../helpers/helpers";
import useTodosStore from "../store/useTodosStore";

export default function TodoPage() {
  const { id } = useParams();
  const getTodo = useTodosStore((state) => state.getTodo);
  const todo = getTodo(id);
  if (!todo) {
    return <EmptyMessage />;
  }
  return (
    <div>
      <h2>Detalles de la tarea</h2>
      <ul>
        <li>Título: {todo.title}</li>
        <li>Fecha creada: {DateFormat("es", todo.createdAt)}</li>
        <li>{todo.completed ? `Tarea Completada` : `Tarea no completada`}</li>
      </ul>
    </div>
  );
}
