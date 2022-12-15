import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/home/Home2";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import UserProfile from "./pages/userProfile/UserProfile";
import Rooms from "./pages/roomSelection/Rooms";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/roomSelection/Checkout";
import Gallery from "./pages/gallery/Gallery";
import Payment from "./pages/payment/Payment";
import SideBarSate from "./context/sideBarState";
import Users from "./pages/dashboard/Users";
import DashHero from "./pages/dashboard/DashHero";
import DashRooms from "./pages/dashboard/Rooms";
import { AmountState } from "./context/amountContext";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <SideBarSate>
        <AmountState>
          <Routes>
            <Route path="/">
              <Route index element={<Home2 />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              
              <Route path="payment" element={<Payment />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="userprofile" element={<UserProfile />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<DashHero />} />
              <Route path="users" element={<Users />} />
              <Route path="rooms" element={<DashRooms />} />
            </Route>
          </Routes>
        </AmountState>
      </SideBarSate>
    </BrowserRouter>
  );
}

export default App;
