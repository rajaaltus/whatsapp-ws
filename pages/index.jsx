import { useRouter } from "next/router";
import { chatData } from "../lib/ChatData";
import { io } from "socket.io-client";
import { getSession, signOut } from "next-auth/react";
function HomePage({ user }) {
  const router = useRouter();
  const socket = io("ws://localhost:8080");
  const handleClick = (id) => {
    router.push(`/${id}`);
  };
  return (
    <>
      <h2 className="text-3xl font-semibold">Chats</h2>
      <div className="flex items-center justify-between py-2 text-indigo-500 text-sm ">
        <span>Broadcast Lists</span>
        <span>New Group</span>
      </div>
      <div className="divide-y divide-slate-600 border-t border-slate-600">
        {chatData.map((item, index) => (
          <ContactItem
            name={item.name}
            message={item.message}
            key={index}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>
      <button onClick={signOut}>Logout</button>
    </>
  );
}

export default HomePage;

function ContactItem({ name, message, handleClick }) {
  return (
    <button
      className="flex items-start justify-between text-left w-full py-3"
      onClick={handleClick}
    >
      <div className="flex items-center justify-start space-x-2 w-10/12">
        <div className="w-16 h-16 bg-gray-300 rounded-full">&nbsp;</div>
        <div className="w-10/12 px-4">
          <h4>{name}</h4>
          <p className="truncate text-gray-500 text-sm">{message}</p>
        </div>
      </div>
      <div className="text-sm text-slate-500">10:02 PM</div>
    </button>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
};
