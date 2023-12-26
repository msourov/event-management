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
import LoginIcon from "@mui/icons-material/Login";
import "../styles/homelayout.css";
import Login from "./Login";
import { useSelector } from "react-redux";

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
  // const [selectedKeys, setSelectedKeys] = useState(["1"]);
  const handleMenuItemClick = (childItem) => {
    // console.log("childItem", childItem);
    navigate(childItem.keyPath[0]);
  };
  const isAuthenticated = useSelector((state) => state.login.isLoggedIn);
  console.log(isAuthenticated);
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link
            to="/profile"
            style={{
              color: "white",
              marginRight: "15px",
              padding: "none",
              marginTop: "10px",
            }}
          >
            <AccountCircleIcon style={{ color: "white", marginLeft: "auto" }} />
            {/* <span style={{ marginLeft: "5px" }}>User</span> */}
          </Link>
          {isAuthenticated ? (
            <Link to="/logout" style={{ marginTop: "10px" }}>
              <LoginIcon style={{ color: "white", marginLeft: "auto" }} />
            </Link>
          ) : (
            <Link to="/login" style={{ marginTop: "10px" }}>
              <LoginIcon style={{ color: "white", marginLeft: "auto" }} />
            </Link>
          )}
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
              // selectedKeys={selectedKeys}
              items={items}
              onClick={handleMenuItemClick}
            />
          </Sider>

          <Content
            style={{
              color: "black",
              // outline: "auto",
              border: "8px solid #c3c9d4",
            }}
          >
            {/* <Breadcrumb items={} /> */}
            <div
              style={{
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <Outlet />
            </div>
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
