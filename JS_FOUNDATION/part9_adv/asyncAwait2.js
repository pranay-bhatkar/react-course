function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched.");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comments data fetched");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data");

    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log("Post data : ", postData);
    console.log("comment data : ", commentData);
    console.log("Comple blog data fetched.");
  } catch (error) {
    console.log("Error in fectching blog data ", error);
  }
}

getBlogData();
