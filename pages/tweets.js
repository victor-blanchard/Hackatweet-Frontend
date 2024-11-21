import Hashtag from "../components/Hashtag";
import LastTweets from "../components/LastTweets";
import Trends from "../components/Trends";
import Tweet from "../components/Tweet";
import Home from "../components/Home";

function pageTweets() {
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
