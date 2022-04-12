import React from "react";
import "./profile.css";
import TopBar from "../../components/navbar/topbar";
import SideBar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import { Avatar } from "antd";

const Profile = () => {
  const PB = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className='profile'>
        <SideBar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <div className='profileCoverImgCtn'>
                <img
                  className='profileCoverImg'
                  src={PB + "messicover.jpg"}
                  alt=''
                />
              </div>

              <Avatar
                className='profileUserImg'
                src={PB + "messiava.jpg"}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Lionel Messi</h4>
              <span className='profileInfoDesc'>
                Welcome to my profile buddies!
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed className='profileFeed' />
            <RightBar className='profileFeed' type='profile' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
