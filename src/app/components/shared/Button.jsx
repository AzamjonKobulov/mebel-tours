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
    whitishOutline:
      "text-white/50 border border-white/50 hover:text-white hover:border-white transition-all duration-300",
    darkOutline:
      "text-brand-dark border border-brand-dark hover:text-brand-dark/50 hover:border-brand-dark/50 transition-all duration-300",
    redOutline:
      "text-brand-red border border-brand-red hover:text-brand-red/50 hover:border-brand-red/50 transition-all duration-300",
    grayOutline:
      "text-brand-dark/50 border border-brand-dark/50 hover:text-brand-dark hover:border-brand-dark transition-all duration-300",
    navScroll:
      "text-brand-dark/80 border border-brand-dark/80 hover:text-brand-dark/50 hover:border-brand-dark/50 transition-all duration-300",
  };

  const classes = `${variantStyle[variant]} ${className}`;

  return (
    <button className={`group ${classes}`} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
