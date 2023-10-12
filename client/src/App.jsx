import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./pages/Add/Add.jsx";
import Books from "./pages/Books/Books.jsx";
import Update from "./pages/Update/Update.jsx";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
