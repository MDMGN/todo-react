import { useEffect } from "react";

export default function EmptyMessage() {
  useEffect(() => {
    // Cuando se desmonte el componente
    return () => {
      console.log("Renderizando cuando se desmonte el componente...");
    };
  }, []);

  return <p className="empty-message">No hay tareas creadas</p>;
}
