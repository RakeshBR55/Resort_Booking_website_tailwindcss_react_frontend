import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/home/Home2";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import BookingForm from "./components/bookingForm/BookingForm";
import UserProfile from "./pages/userProfile/UserProfile";
import Rooms from "./pages/roomSelection/Rooms";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/roomSelection/Checkout";
import Gallery from "./pages/gallery/Gallery";
import Payment from "./pages/payment/Payment";
import Booking from "./components/bookingForm/Booking";
import SideBarSate from "./context/sideBarState";
import Users from "./pages/dashboard/Users";


function App() {
  return (
    <BrowserRouter>
      <SideBarSate>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookingForm" element={<BookingForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Routes>
      </SideBarSate>
    </BrowserRouter>
  );
}

export default App;
