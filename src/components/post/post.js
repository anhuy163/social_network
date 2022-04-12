import React, { useState } from "react";
import "./post.css";
import { Avatar } from "antd";
import {} from "@ant-design/icons";
import {
  MoreVert,
  ThumbUpOutlined,
  ThumbUp,
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";

import { Users } from "../../testData";

const Post = (props) => {
  const PB = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [likeNumber, setLikeNumber] = useState(props.post.like);

  const likeFn = () => {
    if (like) {
      setLike((prevState) => {
        return !prevState;
      });
      setLikeNumber((prevState) => {
        return prevState - 1;
      });
    } else {
      setLike((prevState) => {
        return !prevState;
      });
      setLikeNumber((prevState) => {
        return prevState + 1;
      });
    }
  };

  const favFn = () => {
    if (favorite) {
      setFavorite((prevState) => {
        return !prevState;
      });
      setLikeNumber((prevState) => {
        return prevState - 1;
      });
    } else {
      setFavorite((prevState) => {
        return !prevState;
      });
      setLikeNumber((prevState) => {
        return prevState + 1;
      });
    }
  };
  // console.log(post);
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Avatar
              style={{ width: "2.5rem", height: "2.5rem" }}
              src={
                Users.filter((u) => u.id === props.post.userId)[0].pfp
              }></Avatar>
            <div>
              <div className='postUsername'>
                {Users.filter((u) => u.id === props.post.userId)[0].name}
              </div>
              <div className='postDate'>{props.post.date}</div>
            </div>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <div className='postCentertitle'>{props.post.desc}</div>
          <div className='postCentercontent'>
            <img className='postCentercontentImg' src={props.post.photo} />
          </div>
        </div>
        <div className='postBottom'>
          <div className='postBottomleft'>
            <span
              style={{ marginRight: "0.5rem", color: "rgb(243, 67, 97)" }}
              onClick={likeFn}>
              {like ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            </span>
            <span
              style={{ marginRight: "0.5rem", color: "rgb(16, 96, 217)" }}
              onClick={favFn}>
              {favorite ? <ThumbUp /> : <ThumbUpOutlined />}
            </span>
            <span style={{ fontWeight: "500" }}>
              {likeNumber} people like it
            </span>
          </div>
          <div className='postBottomright'>{props.post.comments} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
