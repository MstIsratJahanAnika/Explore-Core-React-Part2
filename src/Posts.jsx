import { use } from "react";

import Post from "./Post";

export default function Posts({PostsPromise}) {

    console.log(PostsPromise);

  const posts = use(PostsPromise);
  // console.log(posts);

  return (
    <div className="card">
      <h3>All posts are here: {posts.length}</h3>

      {
        posts.map(post => <Post post={post}></Post>)
      }

    </div>
  );
}