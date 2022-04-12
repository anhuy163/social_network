import React from "react";
import "./sidebar.css";
import SideBarFriendList from "./sidebarfriendlist";
import { MoreOutlined } from "@ant-design/icons";
import {
  Feed,
  Chat,
  Group,
  VideoLibrary,
  Bookmark,
  MoreHoriz,
  PeopleAlt,
  CalendarMonth,
} from "@mui/icons-material";
import { Menu, List, Avatar, Calendar, Collapse } from "antd";

// const fakeDataUrl =
//   "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";

const { SubMenu } = Menu;
const { Panel } = Collapse;

const SideBar = () => {
  const menu = (
    <Menu style={{ border: "none" }} defaultSelectedKeys={"1"} mode='inline'>
      <Menu.Item key='1'>
        <div className='sidebarListItem'>
          <Feed className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Feed</span>
        </div>
      </Menu.Item>
      <Menu.Item key='2'>
        <div className='sidebarListItem'>
          <Chat className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Chat</span>
        </div>
      </Menu.Item>
      <Menu.Item key='3'>
        <div className='sidebarListItem'>
          <Group className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Group</span>
        </div>
      </Menu.Item>
      <Menu.Item key='4'>
        <div className='sidebarListItem'>
          <VideoLibrary className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Videos</span>
        </div>
      </Menu.Item>
      <Menu.Item key='5'>
        <div className='sidebarListItem'>
          <Bookmark className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Bookmark</span>
        </div>
      </Menu.Item>

      <SubMenu
        icon={
          <CalendarMonth
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        }
        key='sub1'
        title='Calendar'
        style={{
          fontWeight: "400",
          // paddingLeft: "0.4rem",
          fontSize: "1.2rem",
        }}>
        <div style={{ padding: "0 0.5rem" }}>
          <Calendar fullscreen={false} />
        </div>
      </SubMenu>
    </Menu>
  );
  const friendsList = (
    <List itemLayout='horizontal'>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src='/assets/avatar.jpg' />}
          title='Son Tung MTP'
          description='Muon roi ma sao con'
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src='/assets/avatar.jpg' />}
          title='Son Tung MTP'
          description='Muon roi ma sao con'
        />
        <div>.</div>
      </List.Item>
    </List>
  );

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>{menu}</div>

      <div className='sideBarFriendListSection'>
        <div className='sidebarFriendListTitle'>
          <PeopleAlt className='sidebarListItemIcon' />
          <span className='sidebarListItemText'>Friends</span>
        </div>

        <SideBarFriendList />
      </div>
    </div>
  );
};

export default SideBar;
