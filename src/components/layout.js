import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu, Button, Switch, Layout } from "antd";
import NavigationBar from "./nav-bar";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BulbOutlined,
  BulbFilled,
  AppstoreAddOutlined,
  AppstoreOutlined,
  MailOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  NotificationOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Sider, Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {
  //   const [isCollapsed, setCollapsed] = useState(true);
  //   const collapse = () => {
  //     setCollapsed = (prevState) => {
  //       return !prevState;
  //     };
  //   };
  const [openState, setOpen] = useState(false);
  const [themeState, setTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const toggleNavBar = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };
  const changeMenuTheme = () => {
    setTheme((prevState) => {
      return !prevState;
    });
  };
  return (
    <Layout style={{ height: "100vh", top: "0" }}>
      <div></div>
      <Sider
        // collapsedWidth={"100p"}
        // trigger={null}
        // style={{ height: "100vh", position: "fixed" }}
        theme={themeState ? "dark" : "light"}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}>
        <Menu
          style={{ border: "none" }}
          theme={themeState ? "dark" : "light"}
          inlineCollapsed={openState}
          defaultSelectedKeys={["1"]}
          mode='inline'>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key='2' icon={<NotificationOutlined />}>
            Notifications
          </Menu.Item>
          <SubMenu key='sub1' icon={<MailOutlined />} title='Mail'>
            <Menu.Item icon={<MailOutlined />} key='5'>
              Option 5
            </Menu.Item>
            <Menu.Item icon={<MailOutlined />} key='6'>
              Option 6
            </Menu.Item>
            <Menu.Item icon={<MailOutlined />} key='7'>
              Option 7
            </Menu.Item>
            <Menu.Item icon={<MailOutlined />} key='8'>
              Option 8
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            // style={{ bottom: "-400px" }}
            key='9'
            icon={themeState ? <BulbFilled /> : <BulbOutlined />}
            onClick={changeMenuTheme}>
            {themeState ? "Night mode on" : "Night mode off"}
            {/* <Switch
              style={{
                paddingBottom: "1rem",
                position: "relative",
                left: "0.1rem",
              }}
              onChange={changeMenuTheme}
              unCheckedChildren='light'
              checkedChildren='dark'></Switch> */}
          </Menu.Item>
          {/* <Menu.Item
            onClick={toggleNavBar}
            icon={
              openState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }></Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
