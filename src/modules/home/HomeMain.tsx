import React from "react";
import { Row, Col, Typography } from "antd";
import Image from "next/image";

import SliderHome from "./SliderHome";
import FeatureProducts from "./FeatureProducts";
import SmallInfo from "./SmallInfo";

const HomeMain = () => {
  return (
    <div className="p-2 bg-white">
      <Row gutter={3}>
        <Col xxl={24} xl={24} lg={24} sm={24} xs={24}>
          <SliderHome />
        </Col>
        <Col xxl={24} xl={24} lg={24} sm={24} xs={24}>
          <FeatureProducts/>
        </Col>
        <Col xxl={24} xl={24} lg={24} sm={24} xs={24}>
          <SmallInfo/>
        </Col>
      </Row>
    </div>
  );
};

export default HomeMain;
