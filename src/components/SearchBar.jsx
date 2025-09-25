import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
