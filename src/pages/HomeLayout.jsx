import React, { useState } from "react";
import { Breadcrumb, Layout, Space, Menu } from "antd";
import "../styles/homelayout.css";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TvIcon from "@mui/icons-material/Tv";
import CampaignIcon from "@mui/icons-material/Campaign";
const { Header, Footer, Sider, Content } = Layout;

function HomeLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    { key: "1", icon: <HomeIcon />, label: "Dashboard" },
    {
      key: "2",
      icon: <PeopleIcon />,
      label: "User Management",
      children: [
        {
          label: "Role",
          key: "role",
        },
        {
          label: "User",
          key: "user",
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
          key: "packages",
        },
        {
          label: "App User",
          key: "app-user",
        },
        {
          label: "Storage",
          key: "storage",
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
          key: "ad-list",
        },
        {
          label: "Doctors",
          key: "doctors",
        },
      ],
    },
  ];

  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Header style={{ color: "white" }}></Header>
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
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          {/* <Space style={{ width: "100vw" }}> */}
          <Content
            style={{
              color: "black",
              // outline: "auto",
              border: "8px solid #c3c9d4",
            }}
          >
            <Breadcrumb>
              <Breadcrumb.Item>Home/</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
          {/* </Space> */}
        </Layout>
        <Footer style={{}}></Footer>
      </Layout>
    </div>
  );
}

export default HomeLayout;
