import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

import Link from "next/dist/client/link";

export default function Home({ posts }: { posts: PostMeta[] }) {
  const GO = "https://go.dev/";
  const GO_DOCS = "https://go.dev/doc/";
  return (
    <>
    <p><Link href={GO}>Go</Link> es un lenguaje de programacion open source diseñado para construir software simple , rapido y seguro.</p>
    <p>se recomienda leer la <Link href={GO_DOCS} >Documentacion </Link>
    oficial para aprender sobre codigo en Go , tool packages y modulos.</p>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
