import React, { useState } from "react";
import logo from "../assets/logo.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="w-full flex items-center justify-between p-4">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[70px] md:w-[100px] object-cover" />
        <div className="hidden lg:flex gap-7">
          {menu.map((item, index) => (
            <HeaderItem name={item.name} Icon={item.icon} key={index} />
          ))}
        </div>
        <div className="flex gap-5 lg:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} key={index} />
          )}

          {/* ----------- */}
          <div
            className=" relative lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-2 bg-[#121212] border-[1px] border-gray-500 p-5 right-1  text-xs">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icon}
                        key={index}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
