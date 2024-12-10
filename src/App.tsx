import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Bookshelf
          </Link>
          <Link className="btn btn-primary" to="/add">
            Add Book
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;
