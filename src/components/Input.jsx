import { memo, useState } from "react";

const Input = memo((props) => {
  const {
    valueInitial,
    placeholder,
    type,
    onChange /** onChange = ()=>{}  */,
    ref,
  } = props;
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
}, []);

export default Input;
