import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Books.css";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://bookshopbackend.vercel.app/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete("https://bookshopbackend.vercel.app/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="books-container">
      <h1>Eagle book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <div className="img">
              {book.cover && <img src={book.cover} alt="" />}
            </div>

            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.price}</p>
            <div className="button">
              <button className="delete" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <button className="update">
                <Link className="update" to={`/update/${book.id}`}>
                  Update
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button>
          <Link to="/add">Add New Book</Link>
        </button>
      </div>
    </div>
  );
};

export default Books;
