
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Navbar" element={<Navbar />}/>
      <Route path="/Hero" element={<Hero />}/>
      <Route path="/Carousel" element={<Carousel />}/>
      <Route path="/BookingForm" element={<BookingForm />}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
