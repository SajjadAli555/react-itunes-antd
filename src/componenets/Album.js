import React from "react";
import { List, Image, Card, Button } from "antd";
import "../App.css";
import { PlusCircleTwoTone, DeleteOutlined } from "@ant-design/icons";

export default function Album({
  data,
  handleFavorite,
  favorites,
  handleDelete,
}) {
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
      <List size={12}>
        <Card>
          <Image src={artworkUrl100} className="image" />
          <List.Item className="list">
            CollectionName: {collectionName}
          </List.Item>
          <List.Item className="list">ArtistName: {artistName}</List.Item>
          <List.Item className="list">Currency:{currency}</List.Item>
          <List.Item className="list">Country:{country}</List.Item>
          {handleFavorite && (
            <Button
              onClick={() => handleFavorite(data)}
              icon={<PlusCircleTwoTone />}
            ></Button>
          )}
          {handleDelete && (
            <Button
              onClick={() => handleDelete(collectionId)}
              icon={<DeleteOutlined />}
            ></Button>
          )}
        </Card>
      </List>
    </div>
  );
}
