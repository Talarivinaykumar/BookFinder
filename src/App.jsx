import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import BookGrid from "./components/BookGrid";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleFavorite = (book) => {
    let updated;
    if (favorites.some((fav) => fav.key === book.key)) {
      updated = favorites.filter((fav) => fav.key !== book.key);
    } else {
      updated = [...favorites, book];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const searchBooks = async () => {
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      let url = "https://openlibrary.org/search.json?";
      const params = [];
      if (title) params.push(`title=${encodeURIComponent(title)}`);
      if (author) params.push(`author=${encodeURIComponent(author)}`);
      if (isbn) params.push(`isbn=${encodeURIComponent(isbn)}`);
      if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
      if (language) params.push(`language=${encodeURIComponent(language)}`);
      url += params.join("&");

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      let results = data.docs;
      if (year) results = results.filter((b) => b.first_publish_year == year);
      setBooks(results);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 max-w-5xl mx-auto">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <SearchForm
          title={title} setTitle={setTitle}
          author={author} setAuthor={setAuthor}
          isbn={isbn} setIsbn={setIsbn}
          subject={subject} setSubject={setSubject}
          year={year} setYear={setYear}
          language={language} setLanguage={setLanguage}
          onSearch={searchBooks}
        />

        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {!loading && !error && books.length === 0 && <p>No results found</p>}

        <BookGrid books={books} favorites={favorites} onToggleFavorite={toggleFavorite} />

        <h2 className="text-2xl font-bold mt-10 mb-4">⭐ Favorites</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <BookGrid books={favorites} favorites={favorites} onToggleFavorite={toggleFavorite} />
        )}
      </div>
    </div>
  );
}

export default App;
