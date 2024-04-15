import React from "react";
import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, FundOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" className="avatar" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Insights</Link>
        </Typography.Title>
      </div>
      {/* <Button className="menu-control-container"></Button> */}
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
