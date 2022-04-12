import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import {
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Person, Chat, Notifications, Logout } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Menu, Dropdown } from "antd";

const TopBar = () => {
  const menu = (
    <Menu>
      <Menu.Item key='1' className='userMenuSelection'>
        <UserOutlined />
        <span>
          <Link to='/profile/:username' style={{ color: "black" }}>
            {" "}
            Profile
          </Link>
        </span>
      </Menu.Item>
      <Menu.Item key='2' className='userMenuSelection'>
        <SettingOutlined />
        <span> Settings</span>
      </Menu.Item>
      <Menu.Item key='3' className='userMenuSelection'>
        <LogoutOutlined />
        <span> Log out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span>
          <Link className='logo' to='/'>
            H - Social
          </Link>
        </span>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <SearchOutlined className='searchIcon' />
          <input className='searchInput' placeholder='Search ...'></input>
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <Badge badgeContent={"10"} color='error'>
            <Person className='topbarIcon' />
          </Badge>
          <Badge badgeContent={"10"} color='error'>
            <Chat className='topbarIcon' />
          </Badge>
          <Badge badgeContent={"10"} color='error'>
            <Notifications className='topbarIcon' />
          </Badge>
        </div>
        <Dropdown overlay={menu} placement='bottom' arrow>
          <img className='topbarImage' alt='' src='/assets/avatar.jpg'></img>
        </Dropdown>
      </div>
    </div>
  );
};
export default TopBar;
