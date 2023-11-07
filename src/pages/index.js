import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  const list = posts.map((post) => {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div
          class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
          id={post.id}
        >
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">mar 10, 2019</span>
            <a
              class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
              href="#"
            >
              Design
            </a>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="#"
            >
              {post.title}
            </a>
            <p class="mt-2 text-gray-600">{post.body}</p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="#">
              <a href={`#${post.id}`}>Read more</a>
            </a>
            <div>
              <a class="flex items-center" href="#">
                <img
                  class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                  alt="avatar"
                />
                <h1 class="text-gray-700 font-bold">{post.userId}</h1>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  });

  return list;
}
