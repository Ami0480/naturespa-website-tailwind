import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="absolute w-full z-40">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
