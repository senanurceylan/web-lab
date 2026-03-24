import type { HTMLAttributes, ReactNode } from "react"

const variantStyles = {
  elevated:
    "bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/30 rounded-xl",
  outlined:
    "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl",
  filled: "bg-surface dark:bg-gray-800/80 rounded-xl",
} as const

type CardVariant = keyof typeof variantStyles

export type CardProps = {
  children?: ReactNode
  variant?: CardVariant
  image?: string
  imageAlt?: string
  footer?: ReactNode
  className?: string
} & HTMLAttributes<HTMLElement>

export default function Card({
  children,
  variant = "elevated",
  image,
  imageAlt = "",
  footer,
  className = "",
  ...props
}: CardProps) {
  const variantClass = variantStyles[variant] ?? variantStyles.elevated

  return (
    <article
      className={`overflow-hidden ${variantClass} ${className}`.trim()}
      {...props}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4 sm:p-5 md:p-6">{children}</div>
      {footer && (
        <footer className="px-4 sm:px-5 md:px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
          {footer}
        </footer>
      )}
    </article>
  )
}
