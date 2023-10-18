import React, { useState } from "react";
import { Breadcrumb, Layout, Space, Menu } from "antd";
import { Link, Navigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TvIcon from "@mui/icons-material/Tv";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../styles/homelayout.css";

const { Header, Footer, Sider, Content } = Layout;

const items = [
    { key: "1", label: "Dashboard", link: "/" },
    {
      key: "2",
      label: "User Management",
      children: [
        {
          label: "Role",
          key: "role",
          link: "/role",
        },
        {
          label: "User",
          key: "user",
          link: "/user",
        },
      ],
    },
    {
      key: "3",
      label: "TV App Management",
      children: [
        {
          label: "Packages",
          key: "packages",
          link: "/packages",
        },
        {
          label: "App User",
          key: "app-user",
          link: "/app-user",
        },
        {
          label: "Storage",
          key: "storage",
          link: "/storage",
        },
      ],
    },
    {
      key: "4",
      label: "Ad Management",
      children: [
        {
          label: "Ad List",
          key: "ad-list",
          link: "/ad-list",
        },
        {
          label: "Doctors",
          key: "doctors",
          link: "/doctors",
        },
      ],
    },
    {
      key: "5",
      label: "Settings",
    },
  ];

const RecursiveMenu = ({ items }) => {
    return (<>
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
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              item.label
            )}
            {item.children && (
              <Menu.SubMenu key={item.key} title={item.label}>
                <RecursiveMenu items={item.children} />
              </Menu.SubMenu>
            )}
          </Menu.Item>
        )}
      </Menu>
      </>);
  }

function HomeLayout() {
return (
    <RecursiveMenu items={items} />
)}

export default HomeLayout
  