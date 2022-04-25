import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PB = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://624520460e8dd89b5438d03c.mockapi.io/users/${post.userId}`
      );
      // console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [likeNumber, setLikeNumber] = useState(post.like);

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
            <Link to={`/profile/${user.name}`}>
              <Avatar
                style={{ width: "2.5rem", height: "2.5rem" }}
                src={user.pfp}></Avatar>
            </Link>

            <div>
              <Link to={`/profile/${user.name}`} style={{ color: "black" }}>
                <div className='postUsername'>{user.name}</div>
              </Link>

              <div className='postDate'>{format(post.createdAt)}</div>
            </div>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <div className='postCentertitle'>{post.desc}</div>
          <div className='postCentercontent'>
            <img className='postCentercontentImg' src={post.photo} />
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
          <div className='postBottomright'>{post.comments} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
