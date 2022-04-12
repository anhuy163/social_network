import React from "react";
import "./share.css";
import { Input, Avatar } from "antd";
import {} from "@ant-design/icons";
import { Photo, Mood, LocationOn } from "@mui/icons-material";

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <Avatar className='avatar' src='/assets/avatar.jpg' />
          <Input
            className='shareInput'
            placeholder='Share what you think ...'
          />
        </div>
        <hr className='shareHr'></hr>
        <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <div className='shareType'>
                <Photo style={{ color: "rgb(253, 142, 161)" }}></Photo>
                <span style={{ marginLeft: "0.2rem" }}>Photo or video</span>
              </div>
            </div>
            <div className='shareOption'>
              <div className='shareType'>
                <Mood style={{ color: "yellow" }}></Mood>
                <span style={{ marginLeft: "0.2rem" }}>Status</span>
              </div>
            </div>
            <div className='shareOption'>
              <div className='shareType'>
                <LocationOn style={{ color: "rgb(120, 240, 80)" }} />
                <span style={{ marginLeft: "0.2rem" }}>Location</span>
              </div>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
