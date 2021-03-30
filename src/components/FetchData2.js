import React, { useState, useEffect } from "react";

const FetchData2 = () => {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [id1, getId1] = useState("");
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (response.status != 200) {
          setErr(true);
        } else {
            setErr(false)
          return response.json();
        }
      })

      .then((result) => {
        setTodo(result.title);
        setLoading(false);
      })
      .catch((e) => {});
  }, [id]);

  return (
    <div>
      <input type="text" value={id1} onChange={(e) => getId1(e.target.value)} />
      <button onClick={() => setId(id1)}>Get Todo</button>
      {err ? (
        <h2>Couldn't fetch data</h2>
      ) : loading ? (
        <p>loading... </p>
      ) : (
        <h2>{todo}</h2>
      )}
    </div>
  );
};

export default FetchData2;
