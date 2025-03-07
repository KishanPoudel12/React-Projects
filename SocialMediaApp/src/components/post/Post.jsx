import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Users } from "./../../dummyData";

function Post({ id,photo, postDate, desc, comment, like }) {
  const user= Users.filter(user=>user.id===id)
  console.log(user,"<-Users")
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user[0].profilePicture}
              alt="profileImg"
            />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{postDate}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc ? desc : null}</span>
          <img
            className="postImg"
            src={photo}
            alt="cameramanOne"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAltIcon htmlColor="blue" className="likeIcon" />
            <FavoriteIcon htmlColor="tomato" className="likeIcon" />
            <span className="postLikeCounter">
              {like != 1 && like != 0 ? `${like} likes` : `${like} like`}
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {comment != 1 && comment != 0
                ? `${comment} comments`
                : `${comment} comment`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
