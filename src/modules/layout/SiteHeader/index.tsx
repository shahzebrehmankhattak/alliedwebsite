"use client";

import { Button, Modal, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../../public/assets/steelwireimage.webp";
import { ShoppingCartOutlined } from "@ant-design/icons";
import notfound from "../../../../public/assets/404.jpg";

const SiteHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <nav
          className={`
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-[#CD5C5C]
      `}
        >
          <div>
            <Link href="/" className="text-white flex gap-3 items-center">
              <Image
                src={logo}
                alt="logo"
                className="w-[45px] md:w-[100px] h-[45px] md:h-[100px] m-1 rounded-2xl"
              />
              Allied Machinery
            </Link>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              menuVisible ? "" : "hidden"
            }`}
            id="menu"
          >
            <ul
              className={`
            pt-4
            text-base text-gray-700
            md:flex
            md:justify-between 
            md:pt-0`}
            >
              <li>
                <a
                  className="md:p-4 text-white py-2 block hover:text-gray-400"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block text-white hover:text-gray-400"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block text-white hover:text-gray-400"
                  href="/products"
                >
                  Products
                </a>
              </li>
              <li>
                <div
                  onClick={showModal}
                  className="md:p-4 py-2 block hover:text-gray-400 text-white cursor-pointer"
                >
                  <ShoppingCartOutlined className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Modal title="" open={isModalOpen} footer={null} width={600} centered>
        <div className="flex justify-center">
          <Image src={notfound} alt="404" />
        </div>
        <Typography className="text-xl font-semibold pb-[1rem] text-center ">
          Please Contact on given numbers
        </Typography>
        <div className="flex justify-center">
          <Button className="bg-[#CD5C5C] text-white" onClick={handleCancel}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SiteHeader;
