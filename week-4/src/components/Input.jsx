import { useId } from "react"

export default function Input({
  label,
  helpText,
  error,
  disabled = false,
  id: providedId,
  className = "",
  ...props
}) {
  const generatedId = useId()
  const id = providedId ?? generatedId
  const helpId = helpText ? `${id}-help` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        aria-errormessage={error ? errorId : undefined}
        className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${error ? "border-error focus:ring-error" : "border-gray-300 dark:border-gray-600"} ${className}`.trim()}
        {...props}
      />
      {helpText && <p id={helpId} className="mt-1 text-sm text-muted">{helpText}</p>}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
