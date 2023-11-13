import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./styles.scss";
import { featureProdcuts } from "./MockArray";
import Image from "next/image";
import Link from "next/link";

const FeatureProducts = () => {
  return (
    <>
      <Row>
        <Col
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="py-[1rem]"
        >
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
                  <Typography className="text-[gray] text-sm font-medium text-start">
                    Product:
                    <span className="font-semibold text-sm text-[#000]">
                      {item.name}
                    </span>
                  </Typography>
                  <Typography className="text-[gray text-sm font-medium text-start">
                    Size:
                    <span className="font-semibold text-sm text-[#000]">
                      {item.size}
                    </span>
                  </Typography>
                  <Typography className="text-[gray text-sm font-medium text-start">
                    Quality:
                    <span className="font-semibold text-sm text-[#000]">
                      {item.quality}
                    </span>
                  </Typography>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
      <div className="flex justify-center">
        <Link
          href="/products"
          className="text-semibold text-[#CD5C5C] font-semibold py-6"
        >
          View More Products
        </Link>
      </div>
    </>
  );
};

export default FeatureProducts;
