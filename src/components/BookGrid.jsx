import BookCard from "./BookCard";

export default function BookGrid({ books, favorites, onToggleFavorite }) {
  if (!books || books.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {books.map((book, idx) => (
        <BookCard
          key={idx}
          book={book}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some((fav) => fav.key === book.key)}
        />
      ))}
    </div>
  );
}
