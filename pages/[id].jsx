import ChatInput from "../components/chat/chat-input";
import ChatHeader from "../components/chat/chat-header";
import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ContactChat = () => {
  const { data } = useSession();
  const [message, setMessage] = useState([]);
  const socket = io(`${process.env.WS_URL}:9000`);

  const handleMessage = (msg) => {
    if (data) {
      socket.emit("message", {
        user: data.user?.name,
        message: msg,
        image: data.user?.image,
      });
    }
  };
  useEffect(() => {
    socket.connect();
    socket.on("message", (text) => {
      setMessage([...message, text]);
    });
    return () => {
      socket.disconnect();
    };
  }, [message]);

  return (
    <div className="">
      <ChatHeader />

      <ul className="mt-12 text-left text-gray-300">
        {message.map((item, index) => (
          <li className={`py-4`} key={index}>
            <div
              className={`flex items-center  space-x-2 ${
                data?.user?.name === item.user ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-900">
                <Image
                  src={item.image}
                  width={64}
                  height={64}
                  layout="fixed"
                  alt="user"
                  className="object-cover rounded-full"
                />
              </div>
              <span className={`bg-slate-600 rounded-full py-2  px-6 `}>
                {item.message}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <ChatInput sendMessage={(message) => handleMessage(message)} />
    </div>
  );
};

export default ContactChat;
