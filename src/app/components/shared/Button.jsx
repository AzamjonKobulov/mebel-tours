export default function Button({
  variant = "",
  children,
  className,
  onClick,
  ...props
}) {
  const variantStyle = {
    red: "bg-brand-red text-white hover:text-white/50 transition-all duration-300",
    whiteOutline:
      "text-white border border-white hover:text-white/50 hover:border-white/50 transition-all duration-300",
    grayOutline:
      "text-white/50 border border-white/50 hover:text-white hover:border-white transition-all duration-300",
  };

  const classes = `${variantStyle[variant]} ${className}`;

  return (
    <button className={`group ${classes}`} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
