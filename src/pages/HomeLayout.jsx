import React from "react";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function HomeLayout() {
  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Header style={{ color: "white" }}></Header>
        <Layout hasSider>
          <Sider></Sider>
          <Content style={{ color: "black" }}></Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default HomeLayout;
