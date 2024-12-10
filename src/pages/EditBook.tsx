import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import Book from "../types/Book";
import apiClient from "../utils/api";
import Toast from "../components/Toast";

const EditBook: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (book: Omit<Book, "id">) => {
    apiClient
      .put(`/books/${id}`, book)
      .then(() => {
        Toast({
          icon: "success",
          title: "Book has been updated successfully",
        });
        navigate("/");
      })
      .catch((err) => {
        Toast({
          icon: "error",
          title: "Failed to update the book",
        });
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Edit Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EditBook;
