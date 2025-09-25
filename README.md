
# 📚 Book Finder

**Book Finder** is a modern React application that allows users to search for books using the Open Library API. You can apply filters such as author, publication year, and subject, and the app provides a clean, responsive, and interactive interface.  

---

## ✨ Features

- 🔍 Search books by **title**  
- 🏷️ Filter results by:  
  - Author  
  - Publication Year  
  - Subject  
- 🔄 Reset filters to restore original search results  
- 💻 Responsive grid layout for book cards  
- ⏳ Loader animation while fetching results  
- ⚠️ Error handling for network issues or empty results  
- 📝 Retains search and filter selections even after page refresh  

---

## 🖼️ Demo

![Book Finder Screenshot](screenshot.png)  

---

## 🚀 Installation

1. **Clone the repository**  

```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

1. Type a book title in the **Search Bar** and hit **Search**
2. Apply filters using the **FilterBar**:

   * Author
   * Year
   * Subject
3. Click **Reset** to remove filters and restore the original search results

---

## 🧩 Components

* **Home.jsx** – Main page with search, filter, and book cards
* **SearchBar.jsx** – Input field for book title search
* **FilterBar.jsx** – Filter form with Apply & Reset buttons
* **BookCard.jsx** – Displays book information with cover, title, author, and year
* **Loader.jsx** – Animated loading spinner
* **api.js** – Handles API calls to Open Library

---

## 🌐 API

The app uses the [Open Library API](https://openlibrary.org/developers/api):

```
https://openlibrary.org/search.json?title=<book_title>
```

> Filters are applied **client-side** after fetching the search results.

---

## 🎨 Styling

* Tailwind CSS for a clean and responsive UI
* Smooth hover animations for book cards
* Fixed card size for a neat, grid-based layout
* Gradient background for a modern look

---

## 📦 Deployment

### Netlify

1. Push your repository to **GitHub**
2. Connect your repo to **Netlify**
3. Set **Build Command**:

```bash
npm run build
```

4. Set **Publish Directory**:

```
build
```

5. Optional: Add `_redirects` file for SPA routing:

```
/* /index.html 200
```

---

## 🔮 Future Enhancements

* Pagination for large search results
* More advanced filter options (language, publisher, etc.)
* Save favorite books
* Dark mode support

---

## 📄 License

MIT License

```

---

If you want, I can also **add a visually styled GIF or animation preview** section, so your README looks like a professional project showcase — perfect for GitHub.  

Do you want me to do that next?
```
