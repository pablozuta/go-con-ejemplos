import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <h2 className={styles.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  );
}
