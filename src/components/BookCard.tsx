import React from "react";
import Book from "../types/Book";

interface BookCardProps {
  book: Book;
  onDelete: (id: number | string) => void;
  onEdit: (id: number | string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onDelete, onEdit }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{book.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
      <p className="card-text">{book.description}</p>
      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onEdit(book.id)}
        >
          Edit
        </button>
      </div>
    </div>
  </div>
);

export default BookCard;
