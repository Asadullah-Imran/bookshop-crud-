import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add.jsx";
import Books from "./pages/Books/Books.jsx";
import Update from "./pages/Update/Update.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
