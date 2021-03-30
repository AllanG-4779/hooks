import React, { useEffect, useState } from "react";

function FetchingData() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((res) => {
        setPost(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <ul>
        {post.map((x) => (
          <li key={x.id}>{x.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingData;
