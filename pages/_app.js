import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout, Menu, Affix, BackTop } from "antd";
import MenuBar from "../components/_shared/menubar";

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  const [isLogin, setIsLogin] = useState();
  const [loginUser, setLoginUser] = useState();
  const [menuData, setMenuData] = useState();

  useEffect(() => {
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
      </Head>
      <Layout>
        <Affix offsetTop={0}>
          <MenuBar isLogin={isLogin} loginData={loginUser} />
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
