import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./styles.scss";
import { featureProdcuts } from "./MockArray";
import Image from "next/image";

const FeatureProducts = () => {
  return (
    <>
      <Row>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} className="py-[1rem]">
          <Typography className="text-4xl font-semibold text-center">
            Feature Products
          </Typography>
        </Col>
      </Row>
      <Row gutter={[10, 20]} className="mb-4 py-[1rem]" justify="center">
        {featureProdcuts.map((item) => {
          return (
            <>
              <Col xxl={5} xl={6} lg={8} md={12} sm={24} xs={24}>
                <Card
                  hoverable
                  className="w-full sm:w-[300px] border-4 border-solid border-[#efefef]"
                  cover={
                    <Image alt="example" src={item.img} className="h-[260px]" />
                  }
                >
                  <Typography className="text-[#000] text-base font-semibold text-start">
                    Product: {item.name}
                  </Typography>
                  <Typography className="text-[#000] text-base font-semibold text-start">
                    Price: {item.price}
                  </Typography>
                </Card>
              </Col>
            </>
          );
        })}
        
      </Row>
    </>
  );
};

export default FeatureProducts;
