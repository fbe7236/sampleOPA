import Link from "next/link";
import Layout from "../../components/layout";

function Posts() {
  return (
    <Layout>
      <h1 className="text-5xl">Posts</h1>
      <span>
        <Link href="/">Home</Link>
      </span>
    </Layout>
  );
}

export default Posts;
