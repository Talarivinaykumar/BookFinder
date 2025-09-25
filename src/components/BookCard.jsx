export default function BookCard({ book, onToggleFavorite, isFavorite }) {
  return (
    <div className="border rounded p-3 shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="w-full h-48 object-cover mb-2 rounded"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-2 rounded">
          No Cover
        </div>
      )}
      <h2 className="font-bold">{book.title}</h2>
      <p className="text-sm">
        Author: {book.author_name ? book.author_name.join(", ") : "N/A"}
      </p>
      <p className="text-sm">
        First Published: {book.first_publish_year || "N/A"}
      </p>
      <p className="text-sm">Language: {book.language?.join(", ") || "N/A"}</p>
      <button
        onClick={() => onToggleFavorite(book)}
        className={`mt-2 px-2 py-1 rounded text-sm w-full ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
      </button>
    </div>
  );
};
