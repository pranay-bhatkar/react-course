import Image from "next/image";
import React from "react";

const SearchPage = async ({ searchParams }) => {
  const { query } = await searchParams;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query}`,
  );

  const data = await res.json();

  return (
    <div>
      <h1>Search Result</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>

      <div>
        <p>Images </p>
        <div className=" flex flex-row border gap-4 ">
          <div>
            <Image
              src={
                "https://images.pexels.com/photos/5589339/pexels-photo-5589339.jpeg"
              }
              alt="sport car"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
