import React from "react";
import { Row, Col, Typography } from "antd";
import Image from "next/image";
import mainSteel from "../../../public/assets/steelwireimage.webp";

const HomeMain = () => {
  return (
    <div className="p-2 bg-white">
      <Row gutter={3}>
        <Col xxl={12} xl={12} lg={12} sm={12} xs={12}>
          <Typography className="text-4xl font-bold">
            Steel Wire Rope Manufacturer in Pakistan
          </Typography>
          <Typography className="text-2xl font-bold">
            Get Factory Price Start from 1000M
          </Typography>
          <Typography className="text-xl font-medium">
            Cut out the middleman and save on your investment with our
            factory-direct pricing
          </Typography>
        </Col>
        <Col xxl={12} xl={12} lg={12} sm={12} xs={12}>
          <Image src={mainSteel} alt="No image" />
        </Col>
      </Row>
    </div>
  );
};

export default HomeMain;
