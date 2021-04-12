import React from "react";
import { Image, Card, Button, Row, Col } from "antd";
import "../App.css";
import { PlusCircleTwoTone, DeleteOutlined } from "@ant-design/icons";

export default function Album({ data, handleFavorite, handleDelete }) {
  const {
    country,
    currency,
    artistName,
    collectionId,
    artworkUrl100,
    collectionName,
  } = data;

  return (
    <div>
      <Card className="ant-card">
        <Row>
          <Col span={6} xs={24} md={10} xl={4}>
            <Image src={artworkUrl100} className="ant-image" />
          </Col>
          <Col span={18} xs={24} md={14} xl={20}>
            <h1>CollectionName: {collectionName}</h1>
            <h2>ArtistName: {artistName}</h2>
            <h3>Currency:{currency}</h3>
            <h4>Country:{country}</h4>
            {handleFavorite && (
              <Button
                size="large"
                onClick={() => handleFavorite(data)}
                icon={<PlusCircleTwoTone />}
              ></Button>
            )}

            {handleDelete && (
              <Button
                size="large"
                onClick={() => handleDelete(collectionId)}
                icon={<DeleteOutlined />}
              ></Button>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
}
