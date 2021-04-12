import React from "react";

import { Typography, Button, Image, Alert } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function NoMatch() {
  return (
    <div className="App">
      <Image
        src={"https://www.pngkey.com/png/full/212-2124171_404-png.png"}
        width={400}
      />
      <Alert
        message="Error Text"
        description="Sorry, the page you visited does not exist.."
        type="error"
      />
      <Title>OH SNAP!</Title>
      <Title>Sorry, the page you visited does not exist..</Title>
      <Button type="primary" ghost icon={<HomeOutlined />} onClick={() => {}}>
        Go Back to Home
      </Button>
    </div>
  );
}
