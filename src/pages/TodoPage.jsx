import { useParams } from "react-router-dom";
import EmptyMessage from "../components/EmptyMessage";
import { DateFormat } from "../helpers/helpers";
import useTodosStore from "../store/useTodosStore";
import useAuthStore from "../store/useAuthStore";

export default function TodoPage() {
  const { id } = useParams();
  const getTodo = useTodosStore((state) => state.getTodo);
  const acccessToken = useAuthStore((state) => state.token);
  const todo = getTodo(id, acccessToken);
  console.log({ todo });
  if (!todo) {
    return <EmptyMessage />;
  }
  return (
    <div>
      <h2>Detalles de la tarea</h2>
      <ul>
        <li>Título: {todo.title}</li>
        {todo.created_at && (
          <li>Fecha creada: {DateFormat("es", todo.created_at)}</li>
        )}
        <li>{todo.completed ? `Tarea Completada` : `Tarea no completada`}</li>
      </ul>
    </div>
  );
}
