import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import companyImage from "../../../public/assets/manufacture.jpg";

const AboutUs = () => {
  return (
    <>
      <Row gutter={[15, 15]}>
        <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
          <Typography className="text-center font-bold text-4xl pt-4">
            About Us
          </Typography>
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
          <Typography className="text-center text-base font-medium pl-8 pr-8 pb-4 pt-4">
            Welcome to Allied machinery where we share information related to
            machine. We're dedicated to providing you the very best information
            and knowledge of the above mentioned topics. Our about us page is
            generated with the help of About Us Page Generator We hope you found
            all of the information on Allied machinery helpful, as we love to
            share them with you. If you require any more information or have any
            questions about our site, please feel free to contact us by email at
            .
          </Typography>
        </Col>
        <Col xxl={10} xl={12} lg={12} md={24} xs={24}>
          <div className="p-1 lg:pl-10 pb-1 md:pb-8">
            <Image
              src={companyImage}
              alt="company iamge"
              className="rounded-2xl"
            />
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
          <div className="pt-8 pb-8">
            <Typography className="text-center text-base font-medium">
              Founded in 1990, our company has quickly established itself as a
              trailblazer in its industry. With unwavering commitment,
              innovation, and a dedicated team, we have steadily climbed the
              ladder of success. Our relentless pursuit of excellence and
              customer-centric approach have earned us a reputation for
              delivering top-notch products and services. We pride ourselves on
              fostering a culture of collaboration and continuous improvement,
              ensuring that we stay at the forefront of our field. With a bright
              future ahead, we are excited to continue our journey of growth and
              provide even greater value to our customers and partners
            </Typography>
            <Typography className="text-center text-base font-medium">
              Throughout our journey, we have embraced challenges as
              opportunities for growth, and our resilience has been a key factor
              in our achievements. By staying attuned to market trends and
              investing in cutting-edge technology, we remain at the forefront
              of innovation, consistently delivering solutions that meet the
              evolving needs of our customers. Our unwavering dedication to
              sustainability and corporate social responsibility also
              underscores our commitment to making a positive impact on the
              world. As we look ahead, we are excited to continue this
              remarkable journey, confident that our passion, expertise, and
              unwavering dedication will lead us to even greater successes in
              the years to come.
            </Typography>
            <Typography className="text-center text-base font-medium">
              If you want to know more about us and want to work with us please
              feel free to contact us.we are glad to talk to you and love to
              work wiht you.
            </Typography>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;
