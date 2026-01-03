import React, { useState } from "react";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";
import { IoMenuSharp } from "react-icons/io5";
import DashboardNavber from "../Components/Dashboard/DashboardNavber/DashboardNavber";

const DashboardLayout = () => {

    const [sidebarOpen, SetSidebarOpen] = useState(false)
  return (
    <div className="flex   ">
      <aside className="md:fixed">
        <Sidebar sidebarOpen={sidebarOpen} SetSidebarOpen={SetSidebarOpen} />
      </aside>
      <main className={`flex-1  md:ml-64 ${sidebarOpen&& 'ml-52'} bg-base-200 min-h-screen `}>
         <div >
           <header>
            <DashboardNavber SetSidebarOpen={SetSidebarOpen} sidebarOpen={sidebarOpen}/>
           </header>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
