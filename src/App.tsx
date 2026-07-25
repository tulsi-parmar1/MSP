// import "./App.css";
import About from "./views/About";
import Header from "./views/Header";
import Hero from "./views/Hero";
import { Routes, Route } from "react-router-dom";
import Products from "./views/Products";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
