import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Menu from "./Menu";
import Booking from "./Booking";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <div className="absolute w-full z-40">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
