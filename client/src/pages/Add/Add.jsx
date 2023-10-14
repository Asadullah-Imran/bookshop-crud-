import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");

    try {
      await axios.post("https://bookshopbackend.vercel.app/books", book);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="add-container">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <textarea
        placeholder="description"
        onChange={handleChange}
        name="description"
        style={{ minHeight: "70px" }}
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover img link"
        onChange={handleChange}
        name="cover"
      />
      <div className="buttonDiv">
        <button className="formButton" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
