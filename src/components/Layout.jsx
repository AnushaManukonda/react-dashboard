import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}
