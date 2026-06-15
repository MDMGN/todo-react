export default function Button({
  onClick,
  title,
  color,
  type = "button",
  variant = "secondary",
  className = "",
  ariaLabel,
}) {
  const buttonClassName = ["button", `button-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      style={color ? { backgroundColor: color } : undefined}
      aria-label={ariaLabel ?? title}
    >
      {title}
    </button>
  );
}
