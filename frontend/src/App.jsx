import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/AddProduct";
import Register from "./pages/Register/Register";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element />
          <Route path="*" element />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
