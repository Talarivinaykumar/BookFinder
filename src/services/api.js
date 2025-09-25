const BASE_URL = "https://openlibrary.org/search.json";

export const fetchBooks = async (query, filters = {}) => {
   if (!query || query.trim() === "") {
    return [];
  }
  let url = `${BASE_URL}?title=${encodeURIComponent(query)}`;

  if (filters.author) url += `&author=${encodeURIComponent(filters.author)}`;
  if (filters.year) url += `&first_publish_year=${filters.year}`;
  if (filters.subject) url += `&subject=${encodeURIComponent(filters.subject)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data.docs; 
};
