import React, { useState, useEffect } from "react";
import "./profile.css";
import TopBar from "../../components/navbar/topbar";
import SideBar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import { Avatar } from "antd";
import { useParams } from "react-router";
import axios from "axios";

const Profile = () => {
  const params = useParams().username;
  // console.log(params.username);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://624520460e8dd89b5438d03c.mockapi.io/users?name=${params}`
      );
      // console.log(res.data);
      setUser(res.data[0]);
    };
    fetchUser();
  }, [params]);
  // console.log(user);
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
                  src={user?.pfp || PB + "messicover.jpg"}
                  alt=''
                />
              </div>

              <Avatar className='profileUserImg' src={user?.pfp} alt='' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user?.name}</h4>
              <span className='profileInfoDesc'>
                Welcome to my profile buddies!
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={params} />
            <RightBar type='profile' user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
