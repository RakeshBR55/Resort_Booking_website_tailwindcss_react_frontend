import React from "react";
import PieCharts from "../../components/Dashboard/PieChart";
import Chart from "../../components/Dashboard/Charts";
import DashCard from "./DashCard";
import RecentBooking from "./RecentBooking";
import UsersCard from "../../components/Dashboard/UsersCard";

const DashHero = () => {
  return (
    <div className="flex-1 space-y-10">
      <div className="border-b-2 border-b-gray-400 flex justify-between items-center">
        <h2 className="text-3xl">Hello Admin !!</h2>{" "}
        <span className="text-xl">Welcome to Dashboard</span>
      </div>
      <div className="space-y-2 md:space-y-0 flex flex-wrap justify-center lg:justify-around items-center">
        <DashCard />
        <DashCard />
        <DashCard />
        <DashCard />
      </div>
      <div className="flex w-full flex-wrap">
        <div className="w-96 h-64 space-y-10 bg-gray-50 h-fulll">
          <h2 className="text-2xl text-center">Total Revenue</h2>
          <PieCharts />
        </div>
        <div className="w-ful lg:w-[calc(100%-24rem)] h-96 bg-white">
          <Chart />
        </div>
      </div>
      <div >
        <RecentBooking/>
        <UsersCard userId={'343234'} roomType={'1bhk'} booking={2} date={'23/12/22-24/12/22'}/>
      </div>
    </div>
  );
};

export default DashHero;
