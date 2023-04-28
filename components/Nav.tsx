import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-black h-20 flex items-center justify-center ">
      <ul className="flex gap-10 font-bold text-white text-xl">
        <li>
          <Link href="/">Articles</Link>
        </li>
        <li>
          <Link href="/something">Something</Link>
        </li>
        <li>
          <Link href="/sample">Sample</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
