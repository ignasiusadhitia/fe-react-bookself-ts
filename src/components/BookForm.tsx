import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../types/Book";
import apiClient from "../utils/api";

interface BookFormProps {
  onSubmit: (book: Omit<Book, "id">) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { id } = useParams();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit({ title, author, description });
    setTitle("");
    setAuthor("");
    setDescription("");
    setIsSubmitting(false);
  };

  const fetchBook = async () => {
    const response = await apiClient.get(`/books/${id}`);

    setTitle(response?.data?.title);
    setAuthor(response?.data?.author);
    setDescription(response?.data?.description);
  };

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        <i className="bi bi-plus-square me-2"></i>
        {isSubmitting ? "Submitting..." : id ? "Save Changes" : "Add Book"}
      </button>
    </form>
  );
};

export default BookForm;
