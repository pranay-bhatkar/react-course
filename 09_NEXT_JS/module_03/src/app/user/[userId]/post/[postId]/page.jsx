import React from "react";

const PostIdPage = async ({ params }) => {
  const { postId } = await params;
  return <div>PostId Page : {postId}</div>;
};

export default PostIdPage;
