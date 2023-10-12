import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  // Fetch the existing book data when the component mounts
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          `https://bookshopbackend.vercel.app/books/${bookId}`
        );
        const existingBook = response.data;

        // Set the initial state with the existing book data
        setBook(existingBook);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };

    fetchBookData();
  }, [bookId]);

  const handleChange = (e) => {
    // Update the corresponding field in the book state
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
    try {
      // Send a PUT request to update the book with the current book data
      await axios.put(
        `https://bookshopbackend.vercel.app/books/${bookId}`,
        book
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
        value={book.title} // Set the input value to the current book title
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
        value={book.description} // Set the input value to the current book description
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
        value={book.price} // Set the input value to the current book price
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
        value={book.cover} // Set the input value to the current book cover
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
