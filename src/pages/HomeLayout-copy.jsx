import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TvIcon from "@mui/icons-material/Tv";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../styles/homelayout.css";

const items = [
  { key: "/", icon: <HomeIcon />, label: "Dashboard", link: "/" },
  {
    key: "/role",
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

const HomeLayout1 = () => {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const handleMenuItemClick = (item) => {
    // setSelectedKeys([item.key]);
    navigate(item.key);
    console.log("item", item.key);
  };
  return (
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
      // selectedKeys={selectedKeys}
      items={items}
      onClick={handleMenuItemClick}
    />
  );
};

export default HomeLayout1;
