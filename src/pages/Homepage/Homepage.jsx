import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Homepage.css";

const Homepage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
    <Header />
      <div className="home">
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
