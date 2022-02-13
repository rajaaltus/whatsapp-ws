import { useRouter } from "next/router";
import ChatInput from "../components/chat/chat-input";
import ChatHeader from "../components/chat/chat-header";

const ContactChat = () => {
  const router = useRouter();

  return (
    <div className="">
      <ChatHeader />

      <div className="mt-12 text-left">
        <span className="py-2 bg-slate-600 rounded-full px-6 ">Welcome</span>
      </div>

      <div className="mt-12 text-right">
        <span className="py-2 bg-slate-600 rounded-full px-6 text-left">
          How are you?
        </span>
      </div>

      <ChatInput />
    </div>
  );
};

export default ContactChat;
