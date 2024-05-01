import React, { useRef, useState, useEffect, useContext } from "react";
import nature from "../../assets/images/nature.jpg";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import job from "../../assets/images/job.png";
import location from "../../assets/images/location.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import laptop from "../../assets/images/laptop.jpg";
import media from "../../assets/images/media.jpg";
import apps from "../../assets/images/apps.jpg";
import tik from "../../assets/images/tik.jpg";
import { AuthContext } from "../AppContext/AppContext";

const LeftSide = () => {
  const [data, setData] = useState([]);
  const count = useRef(0);
  const { user, userData } = useContext(AuthContext);

  const handleRandom = (arr) => {
    setData(arr[Math.floor(Math.random() * arr?.length)]);
  };

  useEffect(() => {
    const imageList = [
      {
        id: "1",
        image: laptop,
      },
      {
        id: "2",
        image: media,
      },
      {
        id: "3",
        image: apps,
      },
      {
        id: "4",
        image: tik,
      },
    ];
    handleRandom(imageList);
    let countAds = 0;
    let startAds = setInterval(() => {
      countAds++;
      handleRandom(imageList);
      count.current = countAds;
      if (countAds === 5) {
        clearInterval(startAds);
      }
    }, 2000);

    return () => {
      clearInterval(startAds);
    };
  }, []);

  const progressBar = () => {
    switch (count.current) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
      <div className="flex flex-col items-center relative">
        <img
          className="h-28 w-full rounded-r-xl"
          src="data:image/jpeg;base64,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"
          alt="nature"
        ></img>
        <div className="absolute -bottom-4">
          <Tooltip content="Profile" placement="top">
            <Avatar
              size="md"
              src={user?.photoURL || avatar}
              alt="avatar"
            ></Avatar>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
          {user?.email || userData?.email}
        </p>
        <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">
          Access exclusive tools & insights
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
