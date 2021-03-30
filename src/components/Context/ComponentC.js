import React, { useContext } from "react";
import { userContext, ChannelContext } from "../Context/ComponentA";

function ComponentC() {
  const name = useContext(userContext)
  const Channel = useContext(ChannelContext)
  return (
    <div>
      <h1>{name}</h1>
      <h2>{Channel}</h2>
    </div>
  );
}

export default ComponentC;
