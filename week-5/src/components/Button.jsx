const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-white dark:hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90 dark:bg-secondary dark:text-white dark:hover:bg-secondary/90",
  danger: "bg-error text-white hover:bg-error/90 dark:bg-error dark:text-white dark:hover:bg-error/90",
  ghost: "bg-transparent text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/20",
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none"
  const variantClass = variantStyles[variant] ?? variantStyles.primary
  const sizeClass = sizeStyles[size] ?? sizeStyles.md

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${base} ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
