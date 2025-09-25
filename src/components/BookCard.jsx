const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/default.jpeg";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-80 w-full">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-40 object-cover mb-3 rounded"
      />

      <h2 className="font-bold text-lg line-clamp-2">{book.title}</h2>

      <p className="text-gray-600 text-sm truncate">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>
      <div className="mt-auto">
        <p className="text-gray-500 text-xs">
          Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
