import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

import Link from "next/dist/client/link";

export default function Home({ posts }: { posts: PostMeta[] }) {
  const GO = "https://go.dev/";
  const GO_DOCS = "https://go.dev/doc/";
  const GO_BY_EXAMPLE = "https://gobyexample.com/";
  return (
    <>
      <p>
        <Link href={GO}>Go</Link> is an open source programming language
        designed for building simple, fast, and reliable software. Please read
        the official <Link href={GO_DOCS}>Documentation </Link>
        to learn a bit about Go code, tools packages, and modules.
      </p>
      <p>
        <em>
          Go by Example is a hands-on introduction to Go using annotated example
          programs.
        </em>
      </p>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 27)
    .map((post) => post.meta);

  return { props: { posts } };
}
