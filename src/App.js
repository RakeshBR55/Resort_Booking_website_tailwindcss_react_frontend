import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import BookingForm from "./components/bookingForm/BookingForm";

import UserProfile from "./pages/userProfile/UserProfile";
import Rooms from "./pages/roomSelection/Rooms";
import Attractiion from "./components/attraction/Attractiion";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import Review from "./components/Review/Review.jsx";
import Footer from "./components/footer/Footer.jsx";
import Checkout from "./pages/roomSelection/Checkout";
import Gallery from "./pages/gallery/Gallery";
import Navbar2 from "./components/navbar/Navbar2";
import Payment from "./pages/payment/Payment";

import SideBarSate from "./context/sideBarState";

function App() {
  return (
    <BrowserRouter>
      <SideBarSate SideBarSate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/Attraction" element={<Attractiion />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/review" element={<Review />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Navbar2" element={<Navbar2 />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SideBarSate>
    </BrowserRouter>
  );
}

export default App;
