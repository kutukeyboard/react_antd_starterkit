import Head from "next/head";
import { Layout, Menu, Affix, BackTop } from "antd";
import { HomeFilled, CloudFilled, SettingFilled } from "@ant-design/icons";
// import Style from "../public/styles/style.css";
const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
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
          <Header style={{ backgroundColor: "#fff" }}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ margin: "auto", lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <a href="/">
                  <HomeFilled />
                  Home
                </a>{" "}
              </Menu.Item>
              <Menu.Item key="2">
                <a href="#">
                  <CloudFilled />
                  Website Template
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a href="#">
                  <SettingFilled />
                  Admin Template
                </a>
              </Menu.Item>
            </Menu>
          </Header>
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
