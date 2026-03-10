import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      className={`
        p-2 rounded-lg
        bg-gray-200 dark:bg-gray-700
        text-gray-700 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-600
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900
        transition-colors
        ${className}
      `.trim()}
    >
      {isDark ? (
        <span aria-hidden="true">☀️</span>
      ) : (
        <span aria-hidden="true">🌙</span>
      )}
    </button>
  );
}
