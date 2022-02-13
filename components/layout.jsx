import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-slate-900 text-white">
      <div className="relative max-w-4xl h-full mx-auto px-8 py-16 shadow-2xl">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
