import React, { useState, useEffect } from "react";

const useFetchApi = (endpoint, param) => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [res, setRes] = useState(null);

  const handleFetchAPi = async () => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}/${param}`);
      const data = await response.json();
      setRes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchAPi();
  }, []);

  return { res };
};

function App() {
  const { res } = useFetchApi("todos", "1");

  console.log(res);

  return <div>{res ? res.title : "Loading..."}</div>;
}

export default App;