import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import mainSteel from "../../../public/assets/steelwirerope.jpeg";
import sling from "../../../public/assets/sling.jpg";
import nylonsling from "../../../public/assets/nylonsling.jpg";
import chainBlock from "../../../public/assets/chainblck.png";



const SliderHome = () => {
  return (
    <Carousel autoplay dotPosition="left">
      <div>
        <Image src={mainSteel} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={sling} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={nylonsling} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={chainBlock} alt="bg image" className="w-full h-[400px]" />
      </div>
    </Carousel>
  );
};

export default SliderHome;
