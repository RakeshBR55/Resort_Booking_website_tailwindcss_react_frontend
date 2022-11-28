import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import BookingForm from "./components/bookingForm/BookingForm";
import Payment from './pages/payment/Payment'

<<<<<<< HEAD
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from  "react-router-dom"
import Home from "./pages/home/Home"
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero.jsx'
import Carousel from './components/carousel/Carousel.jsx'
import BookingForm from './components/bookingForm/BookingForm';
import Attractiion from './components/attraction/Attractiion';
import Rooms from './pages/roomSelection/Rooms';

=======
>>>>>>> 7844120a069a5381494f44738317fad1b846f343

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Navbar" element={<Navbar />}/>
      <Route path="/Hero" element={<Hero />}/>
      <Route path="/Carousel" element={<Carousel />}/>
      <Route path="/BookingForm" element={<BookingForm />}/>
      <Route path="/Attraction" element={<Attractiion />}/>
      <Route path="/Rooms" element={<Rooms />}/>
      
      

      

=======
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/payment" element={<Payment />} />
       
>>>>>>> 7844120a069a5381494f44738317fad1b846f343
      </Routes>
    </BrowserRouter>
  );
}

export default App;
