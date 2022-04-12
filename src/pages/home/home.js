import React from "react";
import TopBar from "../../components/navbar/topbar";
import SideBar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className='homeContainer'>
        <SideBar />
        <Feed />
        <RightBar type='home' />
      </div>
    </div>
  );
};

export default Home;
