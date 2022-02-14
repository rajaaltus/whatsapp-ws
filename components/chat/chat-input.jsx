import { CameraIcon, MicrophoneIcon, PlusIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";

const ChatInput = ({ sendMessage }) => {
  const inputRef = useRef("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(inputRef.current.value);
    sendMessage(inputRef.current.value);
    inputRef.current.value = "";
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
      setMessage("");
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-black py-4">
      <div className="flex items-center justify-between w-full space-x-4 px-4">
        <PlusIcon className="w-6 text-indigo-500" />
        <input
          type="text"
          className="w-full rounded-full bg-slate-800 py-3 px-4 focus:outline-none focus:border-none"
          onKeyUp={(e) => handleEnter(e)}
          onChange={(e) => setMessage(e.target.value)}
          ref={inputRef}
          value={message}
        />
        <div className="flex items-center space-x-2">
          <CameraIcon className="w-6 text-indigo-500" />
          <MicrophoneIcon className="w-6 text-indigo-500" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
