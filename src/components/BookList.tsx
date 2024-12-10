import React from "react";
import BookCard from "./BookCard";
import Book from "../types/Book";

interface BookListProps {
  books: Book[];
  onDelete: (id: number | string) => void;
  onEdit: (id: number | string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => (
  <div className="row">
    {books.length > 0 ? (
      books.map((book) => (
        <div className="col-md-4" key={book.id}>
          <BookCard onDelete={onDelete} onEdit={onEdit} book={book} />
        </div>
      ))
    ) : (
      <div className="alert alert-light" role="alert">
        No books found.
      </div>
    )}
  </div>
);

export default BookList;
