import React, { useState } from "react";

const FilterBar = ({ onFilter, isQueryEmpty }) => {
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  const applyFilters = () => {
    onFilter({
      author: author.trim(),
      first_publish_year: year ? parseInt(year, 10) : "",
      language: language.trim()
    });
  };

  const resetFilters = () => {
    setAuthor("");
    setYear("");
    setLanguage("");
    onFilter({ author: "", first_publish_year: "", language: "" });
  };

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded"
        disabled={isQueryEmpty}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="p-2 border rounded"
        disabled={isQueryEmpty}
      />
      <input
        type="text"
        placeholder="Language (e.g. eng)"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded"
        disabled={isQueryEmpty}
      />
      <button
        onClick={applyFilters}
        disabled={isQueryEmpty}
        className={`px-4 rounded text-white  ${
          isQueryEmpty
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 cursor-pointer"
        }`}
      >
        Apply
      </button>
      <button
        onClick={resetFilters}
        disabled={isQueryEmpty}
        className={`px-4 rounded text-white ${
          isQueryEmpty
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer "
        }`}
      >
        Reset
      </button>
    </div>
  );
};

export default FilterBar;
