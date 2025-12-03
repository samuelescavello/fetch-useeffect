import { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  if (!data) return <h1>Caricamento...</h1>;
  return <h1>{data[0].title}</h1>;
}
