import React, { useEffect, useState } from "react";

function FetchRevisit() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        setLoading(false);
        data.json().then((result) => {
          setPosts(result);
        });
      })
      .catch(() => {
        setLoading(false);
        setError("Could not fetch data");
      });
  },[]);

  return (
    <div>

      {
        
        loading
        ? "Please wait..."
        : posts.map((items) => {
            return (
              <div key ={items.id}>
                <p>{items.title}</p>
              </div>
            );
          })
         }
     
    </div>
  );
}

export default FetchRevisit;
