import React, { useState } from "react";
import { Button, Modal, Typography, Input, List } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import Album from "./Album";

export default function Favorites({ data, handleDelete }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { Search } = Input;
  const { Title } = Typography;
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Title>
        {data.length === 0
          ? `Choose your favorites from below`
          : "See your populated list of favorites by clicking here"}
      </Title>
      <Button
        onClick={() => setIsModalVisible(true)}
        disabled={data.length === 0}
        icon={<PlusCircleTwoTone />}
      ></Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        <Search
          className=".ant-input"
          enterButton="Search"
          placeholder="filter artistName "
          onClick={(e) => {
            let filtered =
              data.length > 0
                ? data.filter((item) =>
                    item.artistName
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                : [];
            setFilteredData(filtered);
            setSearchValue(e.target.value);
          }}
        ></Search>
        <List>
          {searchValue.length > 0 &&
            filteredData.length > 0 &&
            filteredData.map((item, index) => (
              <Album
                data={item}
                key={index}
                handleDelete={searchValue.length === 0 && handleDelete}
              />
            ))}
          {searchValue.length > 0 && filteredData.length === 0 && (
            <Title>No results found for this search.</Title>
          )}
          {searchValue.length === 0 &&
            data.length > 0 &&
            data.map((item, index) => (
              <Album data={item} key={index} handleDelete={handleDelete} />
            ))}{" "}
          {searchValue.length === 0 && data.length === 0 && (
            <Title>No data found for this list.</Title>
          )}
        </List>
      </Modal>
    </div>
  );
}
