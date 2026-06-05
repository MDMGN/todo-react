import { useState } from "react";

export default function Input({
  valueInitial,
  placeholder,
  type,
  onChange, /** onChange = ()=>{}  */
  ref,
}) {
  const [value, setValue] = useState(valueInitial);

  console.log("Renderizando Input...");

  function handleInput(value) {
    setValue(value);
    onChange?.(value);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleInput(e.target.value)}
      ref={ref}
    />
  );
}
