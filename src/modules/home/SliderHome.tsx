import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import mainSteel from "../../../public/assets/steelwireimage.webp";
import mainSteel1 from "../../../public/assets/abc.webp";

const SliderHome = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image src={mainSteel} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={mainSteel1} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={mainSteel} alt="bg image" className="w-full h-[400px]" />
      </div>
      <div>
        <Image src={mainSteel1} alt="bg image" className="w-full h-[400px]" />
      </div>
    </Carousel>
  );
};

export default SliderHome;
