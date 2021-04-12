import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Typography } from "antd";
import SearchArtist from "./componenets/SearchArtist";
import Favorites from "./componenets/Favorites";

const { Title } = Typography;

function App() {
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

export default App;
