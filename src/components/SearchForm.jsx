export default function SearchForm({
  title, setTitle,
  author, setAuthor,
  isbn, setIsbn,
  subject, setSubject,
  year, setYear,
  language, setLanguage,
  onSearch
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Language (eng, spa, hin...)"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-full"
      >
        Search
      </button>
    </div>
  );
}
