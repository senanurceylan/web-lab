import { useState } from "react"

const variantStyles = {
  info: "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
  success: "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
  warning: "bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800",
  error: "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
}

export default function Alert({
  children,
  variant = "info",
  dismissible = false,
  onDismiss,
  className = "",
  ...props
}) {
  const [dismissed, setDismissed] = useState(false)

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  const variantClass = variantStyles[variant] ?? variantStyles.info

  if (dismissed) return null

  return (
    <div role="alert" className={`flex items-start gap-3 p-4 rounded-lg border ${variantClass} ${className}`.trim()} {...props}>
      <div className="flex-1 min-w-0">{children}</div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Uyarıyı kapat"
          className="shrink-0 p-1 rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  )
}
