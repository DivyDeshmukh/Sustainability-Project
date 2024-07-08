import React from "react";
import tweet from "../../../public/tweet.svg";
import link from "../../../public/lnk.svg";
import facebook from "../../../public/facebook.svg";
import insta from "../../../public/insta.svg";
import youtube from "../../../public/youtube.svg";
import company from "../../../public/nav.svg";
import main from "../../../public/Frame 23.png";
import app from "../../../public/Group.png";

const Footer = () => {
  return (
    <div className="bg-[#b5ffd9] p-4 lg:p-10 flex flex-col items-center justify-center text-black">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-[90%] mt-2">
        <div className="flex flex-col gap-5  w-[385px] h-[290px] text-left relative">
          <img
            src={company}
            alt="Company Logo"
            className="w-[141px] h-[60px]"
          />
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur
            <br /> dolol drakgonil adipiscing elit aliquam
            <br /> mauris
          </p>

          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[1px] bg-[#ffaa2d]"></div>
        </div>

        <div className=" lg:grid lg:grid-cols-3 gap-4 flex flex-col  md:gap-4">
          <div>
            <h2 className="text-lg font-bold mb-7">Menu</h2>
            <ul>
              <li className="mb-2 text-[18px]">
                <a href="#">Features</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">Gallery</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">Available Cities</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">Join PODIANs</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-7">Company</h2>
            <ul>
              <li className="mb-2 text-[18px]">
                <a href="#">About</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">Contact us</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">FAQ's</a>
              </li>
              <li className="mb-2 text-[18px]">
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-5">Follow Us</h2>
            <div className="flex w-[244px] justify-between mb-5">
              <img src={tweet} alt="Twitter" className="w-[36px] h-[36px] " />
              <img src={link} alt="LinkedIn" className="w-[36px] h-[36px] " />
              <img
                src={facebook}
                alt="Facebook"
                className="w-[36px] h-[36px] "
              />
              <img src={insta} alt="Instagram" className="w-[36px] h-[36px] " />
              <img src={youtube} alt="YouTube" className="w-[36px] h-[36px] " />
            </div>
            <h2 className="text-lg font-bold mb-5">Download on</h2>
            <div className="flex gap-1">
              <img src={main} className="w-[122px] h-[36px]" />
              <img src={app} className="w-[122px] h-[36px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t w-full mx-auto border-[#ffaa2d] my-3"></div>
      <p className="text-[18px]">Copyright @2023 by Podian Pvt Ltd.</p>
    </div>
  );
};

export default Footer;
