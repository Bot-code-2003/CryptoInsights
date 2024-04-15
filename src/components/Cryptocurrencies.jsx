import React, { useState, useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  //Assign count(num of posts to be made visible) to 10 if in <Homepage /> else 100 posts
  //In <Homepage /> class "home-heading-container", we can see that <Cryptocurrencies simplified />  (a param called simplified is being passed)

  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  //Below the cryptos is assigned to empty array initially. Check useEffect hooks comments for better understanding
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //When flow of control gets here, as initially the cryptos is empty and the search term is empty, the filter function is always true and
  //sets all the coins to setCryptos.
  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return "Loading...";
  return (
    <div>
      {/* if not simplified meaning not in homepage component, load all the 100 cryptos */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            * Real Time (-API Enabled) *
          </h3>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            {/* When clicked on below card it redirects to /crypto/exampleId
             which renders <CryptoDetails /> */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="empty-space"></div>
    </div>
  );
};

export default Cryptocurrencies;
