import {
  ChevronLeftIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between py-4 bg-black px-8">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <a>
            <ChevronLeftIcon className="w-5 text-indigo-500" />
          </a>
        </Link>
        <div className="flex items-center justify-start space-x-2">
          <div className="w-12 h-12 rounded-full bg-gray-400"></div>
          <div>
            <p className="text-sm">Princy Annie Laos</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <VideoCameraIcon className="w-5 text-indigo-500" />
        <PhoneIcon className="w-5 text-indigo-500" />
      </div>
    </div>
  );
};

export default ChatHeader;
