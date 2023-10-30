import { Col, Row, Typography } from "antd";
import mainSteel1 from "../../../public/assets/abc.webp";
import mainSteel from "../../../public/assets/steelwireimage.webp";
import React from "react";
import Image from "next/image";

const SmallInfo = () => {
  return (
    <>
      <Row gutter={[15, 15]} justify="center">
        <Col xxl={8} xl={10} lg={10} md={12} sm={24} xs={24} className="p-2">
          <Typography className="text-2xl md:text-3xl font-bold md:text-start pt-[0rem] pb-[0rem] md:pb-[1rem] md:pt-[3rem]">
            New Allied Machinery
          </Typography>
          <Typography className="text-base md:text-2xl font-normal text-center md:text-start ">
            We believe in Quality of Product and user satisfication, We give you
            100% gurantee of Our products,Wa are working from last 50 years in
            this field.
          </Typography>
          <ul className="text-base md:text-xl font-normal pt-2 text-center md:text-start ">
            <li className="py-1">Orginzal Material Used</li>
            <li className="py-1">100% stronger grip</li>
            <li className="py-1">Reliable</li>
          </ul>
        </Col>
        <Col xxl={10} xl={10} lg={10} md={12} sm={24} xs={24}>
          <Image
            src={mainSteel1}
            alt="bg image"
            className="w-full h-[400px] rounded-xl"
          />
        </Col>
        <Col xxl={10} xl={10} lg={10} md={12} sm={24} xs={24}>
          <Image
            src={mainSteel}
            alt="bg image"
            className="w-full h-[400px] rounded-xl"
          />
        </Col>
        <Col xxl={8} xl={10} lg={10} md={12} sm={24} xs={24} className="p-2">
          <Typography className="text-2xl md:text-3xl font-bold md:text-start pt-[0rem] pb-[0rem] md:pb-[1rem] md:pt-[3rem]">
            Best Products
          </Typography>
          <Typography className="text-base md:text-2xl font-normal text-center md:text-start ">
            We believe in Quality of Product and user satisfication, We give you
            100% gurantee of Our products,Wa are working from last 50 years in
            this field.
          </Typography>
          <ul className="text-base md:text-xl font-normal pt-2 text-center md:text-start ">
            <li className="py-1">Orginzal Material Used</li>
            <li className="py-1">100% stronger grip</li>
            <li className="py-1">Reliable</li>
          </ul>
        </Col>

        <Col xxl={16} xl={16} lg={24} md={24} xs={24}>
          <Typography className="text-center text-xl md:text-2xl font-semibold md:font-bold">
            “Quality means doing it right when no one is looking.”
            “Be a yardstick of quality. Some people arent used to an
            environment where excellence is expected.”
          </Typography>
          <Typography className="text-center text-xl md:text-2xl font-semibold md:font-bold">
            “Anything worth doing is worth doing right the first time.”
          </Typography>
          <Typography className="text-center text-xl md:text-2xl font-semibold md:font-bold">
            “Steve Job”
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export default SmallInfo;
