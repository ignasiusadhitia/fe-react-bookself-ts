import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import ConfirmationDialog from "../components/ConfirmationDialog";
import Toast from "../components/Toast";
import Book from "../types/Book";
import apiClient from "../utils/api";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  const getData = () => {
    apiClient
      .get("/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = async (id: number | string) => {
    const result = await ConfirmationDialog({
      icon: "warning",
      title: "Are you sure you want to delete this book?",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      apiClient
        .delete(`/books/${id}`)
        .then(() => {
          Toast({
            icon: "success",
            title: "Book has been deleted successfully",
          });
          getData();
        })
        .catch((err) => {
          Toast({
            icon: "error",
            title: "Failed to delete the book",
          });
          console.error(err);
        });
    } else if (result.isDismissed) {
      Toast({
        icon: "info",
        title: "Action canceled",
      });
    }
  };

  const handleEdit = (id: number | string) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Bookshelf</h1>
      <BookList onDelete={handleDelete} onEdit={handleEdit} books={books} />
    </div>
  );
};

export default Home;
