"use client";

import { Button, Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { productArr } from "./Mock";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  return (
    <>
      <Row gutter={[15, 15]} className="mb-4 py-[1rem]" justify="center">
        <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
          <Typography className="text-4xl text-bold text-center pt-5 pb-6">
            Products
          </Typography>
        </Col>
      </Row>
      <Row gutter={[10, 15]} className="mb-4 py-[2rem]" justify="center">
        {productArr.map((item) => {
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
                  <div className="flex justify-center pt-3">
                    <Button
                      className="bg-[#CD5C5C]  text-white "
                      onClick={() => {
                        router.push(`${item.link}`);
                      }}
                    >
                      Buy Product
                    </Button>
                  </div>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Products;
