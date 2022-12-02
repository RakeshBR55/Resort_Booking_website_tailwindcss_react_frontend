import {React,useContext} from "react";
import Sidebar from "./Sidebar";
import DashHero from "./DashHero";
import SideBarState from "../../context/sideBarState";


const Dashboard = () => {
  return (
    <SideBarState>
     <div className="flex flex-col w-full h-screen">
      <div className="fixed top-0 -left-64 lg:left-0 ">
        <Sidebar />
      </div>
      <div className="absolute lg:w-[calc(100%-16rem)] top-0 left-0 lg:left-64 h-[200vh] p-10 bg-blue-100">
        <DashHero/>
      </div>
    </div>
    </SideBarState>
  );
};

export default Dashboard;
