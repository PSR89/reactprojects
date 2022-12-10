import "./feeds.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function Feeds() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post Key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
