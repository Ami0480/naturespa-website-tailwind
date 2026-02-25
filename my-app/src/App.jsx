import { Routes, Route, useLocation } from "react-router-dom";
import StaffLogin from "./pages/staff-login";
import Index from "./dashboard/index";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Menu from "./Menu";
import Booking from "./Booking";
import ThankYou from "./ThankYou";
import Subscribe from "./Subscribe";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  const location = useLocation();
  const isStaffLogin = location.pathname === "/staff-login";
  const isStaffOnly = ["/staff-login", "/dashboard"].includes(
    location.pathname
  );

  return (
    <>
      <ScrollToTop />
      {!isStaffOnly && (
        <div className="absolute w-full z-40">
          <Header />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="/staff-login" element={<StaffLogin />}></Route>
        <Route path="/dashboard" element={<Index />}></Route>
      </Routes>
      {!isStaffOnly && <Footer />}
    </>
  );
}

export default App;
