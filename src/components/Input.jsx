export default function Input({
  id,
  name,
  valueInitial,
  checked,
  placeholder,
  type,
  onChange /** onChange = ()=>{}  */,
  ref,
  readOnly,
  className = "",
  ariaLabel,
}) {
  function handleInput(value) {
    onChange?.(value);
  }

  return (
    <input
      id={id}
      name={name}
      checked={checked}
      className={className}
      type={type}
      placeholder={placeholder}
      defaultValue={valueInitial}
      onChange={(e) => handleInput(e.target.value)}
      ref={ref}
      readOnly={readOnly}
      aria-label={ariaLabel}
    />
  );
}
