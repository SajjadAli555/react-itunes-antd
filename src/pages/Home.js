import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import SearchArtist from "../components/SearchArtist";
import Favorites from "../components/Favorites";

const { Title } = Typography;
export default function Home() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <Title>Search for Artist</Title>
      <Favorites
        data={favorites}
        handleDelete={(id) => {
          const items = [...favorites].filter(
            (item) => item.collectionId !== id
          );
          setFavorites(items);
        }}
      />
      <SearchArtist
        handleFavorite={(item) => {
          const selectedItem = favorites.find(
            (favItem) => favItem.collectionId === item.collectionId
          );
          if (selectedItem?.collectionId) {
            const filteredItem = favorites.filter(
              (items) => items.collectionId !== item.collectionId
            );
            setFavorites(filteredItem);
          } else {
            const items = [...favorites, item];
            setFavorites(items);
          }
        }}
        favorites={favorites}
      />
    </div>
  );
}
