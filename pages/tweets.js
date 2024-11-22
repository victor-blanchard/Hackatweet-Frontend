import Hashtag from "../components/Hashtag";
import LastTweets from "../components/LastTweets";
import React, { useState } from "react";
import Trends from "../components/Trends";
import Tweet from "../components/Tweet";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";

function pageTweets() {
  const [connected, setConnected] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  if (user.token) {
    setConnected(true);
  }

  console.log(user);

  return (
    <div>
      <Home />
      <Tweet />
      <LastTweets />
      <Trends />
    </div>
  );
}

export default pageTweets;
