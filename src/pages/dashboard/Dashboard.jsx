import { React, useContext } from "react";
import Sidebar from "./Sidebar";
import DashHero from "./DashHero";

import Menu from "../../components/Dashboard/Menu";
import sideBarContext from "../../context/sideBarContext";

const Dashboard = () => {
  const show = useContext(sideBarContext);
  console.log(show.showMenu);
  return (
    <div className="flex flex-col w-full h-screen">
      <div className={show.showMenu?`fixed top-0 left-0 z-50`:`fixed top-0 -left-64 lg:left-0`}>
        <Sidebar />
      </div>
      <div className="absolute lg:w-[calc(100%-16rem)] top-0 left-0 lg:left-64 h-[200vh] p-10 bg-blue-100">
        <Menu />
        <DashHero />
      </div>
    </div>
  );
};

export default Dashboard;
