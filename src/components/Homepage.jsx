import React from "react";
import { Cryptocurrencies } from "../components";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import GithubOutlined from "@ant-design/icons/GithubOutlined";
import ApiFilled from "@ant-design/icons/ApiFilled";
import { Button, Flex } from "antd";

const { Title } = Typography;
const Homepage = () => {
  const substituteParam = 1;
  const { data, isFetching } = useGetCryptosQuery(substituteParam);
  console.log(data);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";
  return (
    <div>
      <div className="hero-division">
        <Typography.Title level={2} style={{ fontWeight: "bold" }}>
          Welcome to Cryptoverse. This is a go-to place to check all of the best
          cryptos available. The data is updated real-time via Rapid API
        </Typography.Title>
        <div
          className="hero-division-buttons"
          style={{ display: "flex", gap: "10px", justifyContent: "center" }}
        >
          <Button type="primary" style={{ height: "50px" }}>
            <a
              style={{ marginRight: "5px" }}
              href="https://rapidapi.com/Coinranking/api/coinranking1/"
              target="_blank"
            >
              API Documentation
            </a>
            <ApiFilled />
          </Button>
          <Button type="primary" style={{ height: "50px" }}>
            <a
              style={{ marginRight: "5px" }}
              href="https://github.com/Bot-code-2003"
              target="_blank"
            >
              Git Hub
            </a>
            <GithubOutlined />
          </Button>
        </div>
      </div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world (Real Time -API Enabled)
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies" className="show">
            Show More
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="empty-space"></div>
    </div>
  );
};

export default Homepage;
