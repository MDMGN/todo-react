import { useState } from "react";

export default function Input({ valueInitial, placeholder, type, onChange }) {

  const [value, setValue] = useState(valueInitial);

  function handleInput(value) {
    const newValue = value.trim(); // Eliminar espacios al inicio
    if (newValue === "") return; // Evitar agregar tareas vacías
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleInput(e.target.value)}
    />
    
  );
}
