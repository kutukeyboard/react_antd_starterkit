import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Modal, Tabs, Dropdown } from "antd";
import {
  HomeFilled,
  LockFilled,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

import LoginForm from "../signupLogin/login";
import SignupForm from "../signupLogin/signup";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const MenuBar = (props) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState();
  const [menuMode, setMenuMode] = useState();
  const [menuVisible, setMenuVisible] = useState();
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

  const showLoginMenu = () => {
    if (props.isLogin) {
      return (
        <Menu.Item
          onClick={logOut}
          style={menuMode == "horizontal" ? { float: "right" } : { float: "none" }}
        >
          <LogoutOutlined />
          Logout
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item
          onClick={showModal}
          style={menuMode == "horizontal" ? { float: "right" } : { float: "none" }}
        >
          <LockFilled />
          Login / Signup
        </Menu.Item>
      );
    }
  };

  const showMainMenu = () => {
    return (
      <div>
        <Menu
          mode={menuMode}
          defaultSelectedKeys={["Home"]}
          style={menuMode == "inline" ? { width: "100vw" } : {}}
          onClick={() => setMenuVisible(false)}
        >
          {menuMode == "inline" && (
            <Menu.Item
              key="close"
              style={{ textAlign: "right" }}
              onClick={() => setMenuVisible(false)}
            >
              <CloseOutlined />
            </Menu.Item>
          )}
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
          {showLoginMenu()}
        </Menu>
      </div>
    );
  };

  const checkWindowSize = () => {
    console.log(props);
    if (window.innerWidth > 599) {
      setMenuMode("horizontal");
    } else {
      setMenuMode("inline");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, [checkWindowSize]);

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
      {menuMode == "inline" ? (
        <Dropdown overlay={showMainMenu()} visible={menuVisible}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
              setMenuVisible(!menuVisible);
            }}
          >
            <MenuOutlined style={{ margin: "20px" }} />
          </a>
        </Dropdown>
      ) : (
        showMainMenu()
      )}
    </div>
  );
};

export default MenuBar;
