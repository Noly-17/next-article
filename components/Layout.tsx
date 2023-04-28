import React from "react";
import Nav from "./Nav";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black mt-10 text-4xl font-bold">NEXT.JS</h1>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
