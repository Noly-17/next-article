import Link from "next/link";
import React from "react";

interface IHome {
  body: string;
  id: number;
  title: string;
}

const ArticleList = ({ id, title, body }: IHome) => {
  return (
    <Link
      href="/article[id]"
      as={`/article/${id}`}
      className="flex flex-col items-center justify-center border border-black rounded-xl p-5 cursor-pointer"
    >
      <h4 className="font-bold text-xl text-black hover:text-blue-500">
        {title}
      </h4>
      <p className="text-black hover:text-blue-500">{body}</p>
    </Link>
  );
};

export default ArticleList;
