// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ToggleTheme;
