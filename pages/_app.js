import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout, Affix, BackTop } from "antd";
import MenuBar from "../components/_shared/menubar";

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  const [isLogin, setIsLogin] = useState();
  const [loginUser, setLoginUser] = useState();
  const [menuData, setMenuData] = useState();

  const getMenu = () => {
    // get menu by user role via your api here, you can use loginUser as reference.

    return [
      {
        caption: "Website Template",
        url: "",
        child: [
          {
            caption: "Product Catalog",
            url: "",
          },
          {
            caption: "Product Detail",
            url: "",
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

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setLoginUser(localStorage.getItem("loginUser"));
      setMenuData(getMenu());
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
      </Head>
      <Layout>
        <Affix offsetTop={0}>
          <MenuBar isLogin={isLogin} loginData={loginUser} menuList={menuData} />
        </Affix>
        <BackTop visibilityHeight={200} />
        <Content style={{ backgroundColor: "#fff" }}>
          <Component {...pageProps} />
        </Content>
        <Footer>React ANTD Starterkit</Footer>
      </Layout>
    </div>
  );
};

export default MyApp;
