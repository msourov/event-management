import React, { useState } from "react";
import { Breadcrumb, Layout, Space, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TvIcon from "@mui/icons-material/Tv";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../styles/homelayout.css";

const { Header, Footer, Sider, Content } = Layout;

const items = [
  { key: "/", icon: <HomeIcon />, label: "Dashboard", link: "/" },
  {
    key: "2",
    icon: <PeopleIcon />,
    label: "User Management",
    children: [
      {
        label: "Role",
        key: "/role",
        link: "/role",
      },
      {
        label: "User",
        key: "/user",
        link: "/user",
      },
    ],
  },
  {
    key: "3",
    icon: <TvIcon />,
    label: "TV App Management",
    children: [
      {
        label: "Packages",
        key: "/packages",
        link: "/packages",
      },
      {
        label: "App User",
        key: "/app-user",
        link: "/app-user",
      },
      {
        label: "Storage",
        key: "/storage",
        link: "/storage",
      },
    ],
  },
  {
    key: "4",
    icon: <CampaignIcon />,
    label: "Ad Management",
    children: [
      {
        label: "Ad List",
        key: "/ad-list",
        link: "/ad-list",
      },
      {
        label: "Doctors",
        key: "/doctors",
        link: "/doctors",
      },
    ],
  },
  {
    key: "/settings",
    icon: <SettingsIcon />,
    label: "Settings",
    link: "/settings",
  },
];

function HomeLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  const handleMenuItemClick = (childItem) => {
    navigate(childItem.key);
    console.log("childItem.key", childItem.key);
  };

  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Header
          style={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <AccountCircleIcon style={{ color: "white", marginLeft: "auto" }} />
          <span style={{ marginLeft: "5px" }}>User</span>
        </Header>
        <Layout hasSider>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu
              style={{
                paddingBottom: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
              // onClick={link => {
              //   // <Link to={link} />
              //   console.log('link', link)
              // }}
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              selectedKeys={selectedKeys}
              items={items}
              onClick={handleMenuItemClick}
            >
              {/* {console.log("item", items)}
              {items.map((item) =>
                !item.children ? (
                  <Menu.Item
                    key={item.key}
                    onClick={
                      () => handleChildItemClick(item)
                      // <Link to={item.link ?? item.children.}>{item.label}</Link>
                    }
                  >
                    {console.log("link", item.link)}
                    {item.icon}
                    {item.label}
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key={item.children.key}
                    onClick={() => handleChildItemClick(item.children)}
                  >
                    {item.children.label}
                  </Menu.Item>
                )
              )} */}
            </Menu>
          </Sider>
          {/* <Space style={{ width: "100vw" }}> */}
          <Content
            style={{
              color: "black",
              // outline: "auto",
              border: "8px solid #c3c9d4",
            }}
          >
            {/* <Breadcrumb items={} /> */}
            <Link
              to={"/role"}
              style={{ color: "black ", alignItems: "center" }}
            >
              Go to role
            </Link>
          </Content>
          {/* </Space> */}
        </Layout>
        <Footer
          style={{
            backgroundColor: "white",
            color: "black",
            justifyContent: "center",
            padding: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CopyrightIcon style={{ width: "16px", marginRight: "5px" }} />
          <span>
            <p style={{ fontFamily: "sans-serif", fontWeight: "300" }}>
              Copyright 2023. All rights reserved.
            </p>
          </span>
        </Footer>
      </Layout>
    </div>
  );
}

export default HomeLayout;
