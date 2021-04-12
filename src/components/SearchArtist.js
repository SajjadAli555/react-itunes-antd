import React, { useState, useEffect } from "react";
import { Input, List, Spin } from "antd";
import Axios from "axios";
import { useDebounce } from "use-debounce";
import Album from "./Album";

const { Search } = Input;
export default function SearchArtist({ favorites, handleFavorite }) {
  const [value, setValue] = useState("");
  const [textToSearch] = useDebounce(value, 1000);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (value) => setValue(value);

  useEffect(() => {
    if (textToSearch.length > 0) {
      setLoading(true);
      setOptions([]);
      Axios.get(
        `https://itunes.apple.com/search?term=${textToSearch}&media=audiobook`
      )
        .then((response) => {
          setLoading(false);
          const options = response.data.results;
          setOptions(options);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [textToSearch]);

  return (
    <List>
      <Search
        className=".ant-input"
        enterButton="Search"
        placeholder="input search text"
        onSearch={onSearch}
      />
      {loading && <Spin />}

      {options &&
        options.map((item, i) => (
          <Album
            data={item}
            key={i}
            handleFavorite={handleFavorite}
            favorites={favorites}
          />
        ))}
    </List>
  );
}
