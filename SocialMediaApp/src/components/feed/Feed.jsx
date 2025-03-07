import React from "react";
import "./Feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts, Users } from "./../../dummyData";
console.log(Posts, Users, "<-");
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post

            key={post.id}
            id={post.id}
            photo={post.photo}
            postDate={post.date}
            desc={post.desc}
            comment={post.comment}
            like={post.like}
          />
        ))}
      </div>
    </div>
  );
}
export default Feed;
