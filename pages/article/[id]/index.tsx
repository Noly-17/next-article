import { useRouter } from "next/router";
import React from "react";

const ArticleItem = ({ article }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="text-black mt-10">
      <div className="flex flex-col items-center justify-center border border-black rounded-xl w-60 p-5 cursor-pointer">
        <h1 className="text-xl font-bold rounded p-4">{article.title}</h1>
        <p className="rounded text-center">{article.body}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export default ArticleItem;
