import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../testData";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(username);
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `https://624520460e8dd89b5438d03c.mockapi.io/posts?name=${username}`
          )
        : await axios.get("https://624520460e8dd89b5438d03c.mockapi.io/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  console.log(posts);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
