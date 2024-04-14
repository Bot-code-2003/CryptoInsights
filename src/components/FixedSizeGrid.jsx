import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Row, Col, Typography } from "antd";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";

const { Title } = Typography;

export default function FixedSizeGrid(props) {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId: props.coinId,
  });

  if (isFetching) return "Loading...";

  // Extract and format timestamp and price data for the DataGrid
  const rows = coinHistory?.data?.history.map((dataPoint, index) => ({
    id: index + 1, // Adding unique IDs for each row
    timestamp: new Date(dataPoint.timestamp).toLocaleString(), // Format timestamp
    price: dataPoint.price, // Price data
  }));

  // Define columns for the DataGrid
  const columns = [
    { field: "timestamp", headerName: "Timestamp", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Title level={3}>Crypto History</Title>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
