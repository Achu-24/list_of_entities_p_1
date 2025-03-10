import React from "react";
import BookCard from "./cart/BookCard";

const books = [
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 },
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
