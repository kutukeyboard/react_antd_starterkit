import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout, Affix, BackTop, Menu } from "antd";
import MenuBar from "../components/_shared/menubar";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  const [isLogin, setIsLogin] = useState();
  const [loginUser, setLoginUser] = useState();
  const [menuData, setMenuData] = useState();
  const [collapsed, setCollapsed] = useState(true);

  const getMenu = () => {
    // get menu by user role via your api here, you can use loginUser as reference.

    return [
      {
        caption: "Website Template",
        url: "",
        child: [
          {
            caption: "Product Catalog",
            url: "/productCatalog",
          },
          {
            caption: "Product Detail",
            url: "/productDetail",
          },
          {
            caption: "Blog Page",
            url: "",
          },
        ],
      },
      {
        caption: "Admin Template",
        url: "",
        child: [
          {
            caption: "Dashboard Page",
            url: "",
          },
          {
            caption: "Setting Page",
            url: "",
          },
          {
            caption: "Gridview page",
            url: "",
          },
          {
            caption: "Detail page",
            url: "",
          },
        ],
      },
    ];
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setMenuData(getMenu());
    if (localStorage.getItem("userToken")) {
      setLoginUser(localStorage.getItem("loginUser"));
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>React ANTD</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.7/antd.min.css"
        />
        <link rel="stylesheet" href="/styles/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout style={{ backgroundColor: "#fff" }}>
        <MenuBar isLogin={isLogin} loginData={loginUser} menuList={menuData} />
        <BackTop visibilityHeight={200} />
        <Content style={{ marginTop: "20px", padding: "0 50px" }}>
          <Component {...pageProps} />
        </Content>
        <Footer>
          <p style={{ textAlign: "center" }}>React ANTD Starterkit</p>
        </Footer>
      </Layout>
    </div>
  );
};

export default MyApp;
