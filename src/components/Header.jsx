export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center bg-blue-600 dark:bg-blue-800 text-white py-4 px-6 shadow-md mb-6 rounded">
      <h1 className="text-2xl font-bold">📚 Book Finder</h1>
      <button
        onClick={toggleDarkMode}
        className="px-3 py-1 rounded bg-white dark:bg-gray-700 text-blue-600 dark:text-gray-200"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
