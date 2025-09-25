import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { fetchBooks } from "../services/api";

const Home = () => {
  const [allBooks, setAllBooks] = useState([]); 
  const [books, setBooks] = useState([]);       
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [error, setError] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");

  const handleSearch = async (query) => {
    setCurrentQuery(query);

    if (!query || query.trim() === "") {
      setError("Please enter a book title to search.");
      setBooks([]);
      setAllBooks([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await fetchBooks(query, {}); 
      if (results.length === 0) {
        setError("No books found!");
        setBooks([]);
        setAllBooks([]);
      } else {
        setAllBooks(results); 
        setBooks(results);   
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

 const handleFilter = (newFilters) => {
  setFilters(newFilters);

  if (!allBooks.length) {
    setError("Search for a book first before applying filters.");
    return;
  }

  let filtered = [...allBooks];

  if (newFilters.first_publish_year) {
    filtered = filtered.filter(
      (book) => book.first_publish_year === newFilters.first_publish_year
    );
  }

  if (newFilters.language) {
    filtered = filtered.filter(
      (book) =>
        book.language &&
        book.language.some((lang) =>
          lang.toLowerCase().includes(newFilters.language.toLowerCase())
        )
    );
  }

  if (newFilters.author) {
    filtered = filtered.filter(
      (book) =>
        book.author_name &&
        book.author_name.some((a) =>
          a.toLowerCase().includes(newFilters.author.toLowerCase())
        )
    );
  }

  setBooks(filtered);

  if (!filtered.length) {
    setError("No books match your filters.");
  } else {
    setError("");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 hover:text-indigo-600 transition-colors duration-300">
          Book Finder 📚
        </h1>
        
        <div className="space-y-4 mb-8">
          <SearchBar onSearch={handleSearch} />
          <FilterBar
            onFilter={handleFilter}
            isQueryEmpty={!allBooks.length && !loading}
          />
        </div>

        {loading && <Loader />}
        {!loading && error && (
          <div className="text-red-500 my-4 p-4 bg-red-50 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 animate-fadeIn">
          {books.map((book) => (
            <div className="transform hover:scale-105 transition-transform duration-300">
              <BookCard key={book.key} book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
