import { useState } from "react";
import Link from "next/link";
import { Menu, Modal, Tabs } from "antd";
import { HomeFilled, LockFilled, LogoutOutlined } from "@ant-design/icons";

import LoginForm from "../signupLogin/login";
import SignupForm from "../signupLogin/signup";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const MenuBar = (props) => {
  const [modalVisible, setModalVisible] = useState();

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("loginUser");
    router.reload();
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = (e) => {
    setModalVisible(false);
  };

  const handleCancel = (e) => {
    setModalVisible(false);
  };

  return (
    <div>
      <Modal visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Login" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="Signup" key="2">
            <SignupForm />
          </TabPane>
        </Tabs>
      </Modal>
      <div className="menu-container">
        <Menu mode="horizontal" defaultSelectedKeys={["Home"]} style={{ lineHeight: "64px" }}>
          <Menu.Item key="Home">
            <a href="/">
              <HomeFilled />
              Home
            </a>
          </Menu.Item>
          {props.menuList &&
            props.menuList.map((menu, index) => {
              return menu.child.length > 0 ? (
                <SubMenu key={index} title={menu.caption}>
                  {menu.child.map((child, childIndex) => {
                    return (
                      <Menu.Item key={child.caption + childIndex}>
                        <Link href={child.url}>
                          <a>{child.caption}</a>
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={index}>
                  <Link href={menu.url ? menu.url : ""}>
                    <a>{menu.caption}</a>
                  </Link>
                </Menu.Item>
              );
            })}

          {/* <SubMenu icon={<CloudFilled />} title="Website Template">
            <Menu.Item>
              <a href="#">Product Catalog</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Product Detail</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Blog Page</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<SettingFilled />} title="Admin Template">
            <Menu.Item>
              <a href="#">Dashboard</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Setting Page</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Data Grid Page</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Detail Page</a>
            </Menu.Item>
          </SubMenu> */}
        </Menu>
        {props.isLogin && <p className="loginUser">Welcome, {props.loginData}</p>}
        <Menu mode="horizontal" style={{ lineHeight: "64px" }}>
          {props.isLogin ? (
            <Menu.Item onClick={logOut}>
              <LogoutOutlined />
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item onClick={showModal}>
              <LockFilled />
              Login / Signup
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default MenuBar;
