import React from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import Book from "../types/Book";
import apiClient from "../utils/api";
import Toast from "../components/Toast";

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (book: Omit<Book, "id">) => {
    apiClient
      .post("/books", book)
      .then(() => {
        Toast({
          icon: "success",
          title: "Book has been added successfully",
        });
        navigate("/");
      })
      .catch((err) => {
        Toast({
          icon: "error",
          title: "Failed to add the book",
        });
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Add a New Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddBook;
