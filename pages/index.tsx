import Image from "next/image";
import Head from "next/head";
import ArticleList from "@/components/ArticleList";

interface IHome {
  body: string;
  id: number;
  title: string;
}

interface IArticle {
  articles: Array<{ body: string; id: number; title: string }>;
}

export default function Home({ articles }: IArticle) {
  return (
    <div className="mt-5">
      <Head>
        <title>Articles</title>
        <meta name="description" content="Made by create next app" />
      </Head>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 p-8">
        {articles.map(({ id, title, body }: IHome) => {
          return <ArticleList id={id} title={title} body={body} />;
        })}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=40"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
