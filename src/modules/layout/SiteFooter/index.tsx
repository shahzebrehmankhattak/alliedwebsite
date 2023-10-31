import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const SiteFooter = () => {
  return (
    <>
      <div className="flex flex-col mx-auto h-auto">
        <div
          className="flex lg:items-center 
          lg:justify-between flex-col lg:flex-row
          gap-y-[45px] py-[30px] lg:py-0 px-[15px]
          sm:px-[30px] md:px-[40px] lg:px-[50px]
          xl:px-[75px] w-full h-auto lg:h-[380px] bg-[#CD5C5C]"
        >
          <div className="lg:w-4/12">
            <div className="flex items-center justify-center gap-x-[8px] mb-[30px] text-white">
              <i className="fa-solid fa-2xl fa-laptop-code"></i>Lorem ipsum
              dolor sitfnvn
            </div>

            <div className="text-center text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ipsum doloremque praesentium repudiandae similique quas ipsa!
            </div>
          </div>

          <div className="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-[60px] gap-x-[90px] sm:gap-x-0 lg:w-7/12">
            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-white text-sm font-bold select-none">
                Product
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="#">
                  <li>Overview</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Features</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Solutions</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Tutorials</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Pricing</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Releases</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-white text-sm font-bold select-none">
                Company
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="#">
                  <li>About us</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Careers</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Press</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>News</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Media kit</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-white text-sm font-bold select-none">
                Resources
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="#">
                  <li>Blog</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Newsletter</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Events</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Help centre</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Tutorials</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Support</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-white text-sm font-bold select-none">
                Social
              </div>

              <ul className="flex flex-col gap-[10px] text-white">
                <a className="hover:underline" href="#">
                  <li>Twitter</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Gmail</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Facebook</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Instagram</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Youtube</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-white text-sm font-bold select-none">
                Legal
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="#">
                  <li>Terms</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Privacy</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Cookies</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Licenses</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Settings</li>
                </a>
                <a className="hover:underline" href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-evenly 
        sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] 
        lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-[#CD5C5C]"
        >
          <div className="text-white text-center">
            Copyright by shahzebkhattak703@gmailcom
          </div>

          <ul className="flex gap-[15px] text-white cursor-pointer">
            <li className="ease-in duration-200 hover:text-gray-100">
              <TwitterOutlined className="text-white text-2xl" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <MailOutlined className="text-white text-2xl" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <FacebookOutlined className="text-white text-2xl" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <InstagramOutlined className="text-white text-2xl" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <YoutubeOutlined className="text-white text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SiteFooter;
