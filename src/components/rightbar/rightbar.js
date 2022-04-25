import React from "react";
import "./rightbar.css";
import {
  PeopleAltOutlined,
  FmdGood,
  Work,
  Instagram,
  Email,
  ExpandMore,
} from "@mui/icons-material";
import { Avatar, List, Row, Col } from "antd";
import { Item } from "rc-menu";
import { exampleData } from "../../testData";
import Column from "antd/lib/table/Column";

const PB = process.env.REACT_APP_PUBLIC_FOLDER;
// console.log(PB);

const adLink =
  "https://itviec.com/nha-tuyen-dung/ntq-solution?utm_source=google&utm_medium=dis_cpc&utm_campaign=hn_performancemax&gclid=CjwKCAjwrqqSBhBbEiwAlQeqGlu-VYTMFHh9a_JZib4zHjCOOX5-HkHh50tLdywGzEzlCsSrZEytpBoCfO8QAvD_BwE";

const onlineFriendsList = (
  <List
    dataSource={exampleData}
    renderItem={(item) => (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={PB + item.img} />}
          title={item.name}
          description={item.msg}
        />
        <div>
          <img className='onlineIcon' src='./assets/online.svg' />
        </div>
      </List.Item>
    )}
  />
);

const RightBar = ({ type, user }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className='rightbarTop'>
          <img className='rightbarBdImg' src='./assets/bdcake.png' />
          <span>
            <b>Son Tung</b> and <b>5 others</b> have a birthday today
          </span>
        </div>
        <div className='rightbarCenter'>
          <a className='rightbarCenterAd' href={adLink} target='_blank'>
            <img className='rightbarCenterImg' src='./assets/NTQ.jpg'></img>
          </a>
        </div>
        <div className='rightbarBottom'>
          <div className='rightbarBottomTop'>
            <PeopleAltOutlined />
            <span style={{ fontSize: "1.2rem", marginLeft: "0.2rem" }}>
              Online friends
            </span>
          </div>
          <div className='rightbarBottomEnd'>{onlineFriendsList}</div>
        </div>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <div className='rightbarProfile'>
        <div className='rightbarProfileTitle'>Information</div>
        <div className='rightbarProfileInfo'>
          <div className='rightbarProfileInfoItems'>
            <div className='rightbarProfileInfoItem'>
              <Work />
              <span>Working at: {user.workAt}</span>
            </div>
            <div className='rightbarProfileInfoItem'>
              <FmdGood />
              <span>From: {user.city}</span>
            </div>
            <div className='rightbarProfileInfoItem'>
              <Email />
              <span> {user.email}</span>
            </div>
            <div className='rightbarProfileInfoItem'>
              <Instagram />
              <span> {user.instagram}</span>
            </div>
          </div>
          <div className='rightbarProfileFriends'>
            <div className='rightbarProfileTitle'>Friends</div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {exampleData.map((u) => (
                <Col key={u.id} span={8}>
                  <img
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "0.5rem",
                    }}
                    src={PB + u.img}></img>
                  <div>{u.name}</div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
