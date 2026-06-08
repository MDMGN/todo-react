import { useEffect } from "react";

export default function EmptyMessage() {
  
  useEffect(() => {
    // Cuando se desmonte el componente
    return () => {
      console.log("Rederizando cuando se desmonte el componente...");
    };
  }, []);

  return <p>No hay tareas creadas</p>;
  
}
