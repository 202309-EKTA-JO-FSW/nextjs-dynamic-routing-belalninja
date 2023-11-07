import { Inter } from "next/font/google";
import Post from "../components/post";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

function Posts({ posts }) {
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((r) => r.json())
  //     .then((r) => setPosts(r));
  // }, []);

  const list = posts ? (
    posts.map((post) => {
      return <Post key={post.id} post={post} />;
    })
  ) : (
    <h1>Loading....</h1>
  );

  return list;
}

export default Posts;
