import { useEffect } from "react";
import { usePostsStore } from "../store/postStore";

function Posts() {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <>
            <li key={p.id}> Title : {p.title}</li>
            <p>{p.body}</p>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
