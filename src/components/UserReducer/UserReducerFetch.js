// @ts-nocheck
import React, { useEffect, useReducer } from "react";

const initial = {
  posts: {},
  error: "",
  loading: true,
};
const reduce = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return { posts: action.payload, error: "", loading: false };
    case "error":
      return { posts: {}, error: "Something went wrong", loading: false };
  }
};
function UserReducerFetch() {
  const [result, dispatch] = useReducer(reduce, initial);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((result) => {
        // @ts-ignore")
        result.json().then((jsoned) => {
          dispatch({ type: "fetch_success", payload: jsoned });
        });
      })
      .catch((error) => {
        return dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {result.loading ? "Loading...Be Patient..." : result.posts.title}
      {result.error !== "" ? result.error : ""}
    </div>
  );
}

export default UserReducerFetch;
