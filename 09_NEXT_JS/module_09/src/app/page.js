"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Home = () => {
  // const [data, setData] = useState(null);
  // const [isLoding, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchUserData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       "https://api.freeapi.app/api/v1/public/randomusers",
  //     );
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  const { data, error, isLoding } = useQuery({
    queryKey: ["user-data"],
    queryFn: () =>
      fetch("https://api.freeapi.app/api/v1/public/randomusers").then((res) =>
        res.json(),
      ),
  });

  if (isLoding) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error... {error}</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default Home;
