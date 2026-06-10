import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300 hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <HiSun
          size={22}
          className="transition-all duration-300"
        />
      ) : (
        <HiMoon
          size={22}
          className="transition-all duration-300"
        />
      )}
    </button>
  );
}