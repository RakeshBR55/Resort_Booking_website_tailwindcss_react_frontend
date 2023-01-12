import { React, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate,Link } from "react-router-dom";
import Menu from "../../components/Dashboard/Menu";
import { sideBarContext } from "../../context/sideBarContext";
import { authContext } from "../../context/authContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { decodedToken, isMyTokenExpired } = useContext(authContext);
  useEffect(() => {
    if (decodedToken === null || isMyTokenExpired) {
      alert('You are not logged in. Please login to continue')
      navigate("/login");
    }

  }, [decodedToken]);
  console.log(decodedToken);
  const show = useContext(sideBarContext);

  return decodedToken.isAdmin ? (
    <div className="flex flex-col w-full h-screen">
      <div
        className={
          show.showMenu
            ? `fixed top-0 left-0 z-50`
            : `fixed top-0 -left-64 lg:left-0 w-64`
        }
      >
        <Sidebar />
      </div>
      <div className="absolute w-full lg:w-[calc(100%-16rem)] top-0 left-0 lg:left-64 px-5 pb-10 min-h-screen bg-blue-100 lg:pt-10">
        <Menu />
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen">
      You don't have access to this page
      <Link to='/' className="underline">Return to home page</Link>
    </div>
  );
};

export default Dashboard;
