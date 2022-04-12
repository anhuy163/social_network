import React, { useState, useEffect } from "react";
import VirtualList from "rc-virtual-list";
import { List, Avatar, Skeleton, Divider } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./sidebar.css";

const callApi = (endpoint, method = "GET", body) => {
  return axios({
    method: method,
    url: "https://624520460e8dd89b5438d03c.mockapi.io/hsocial",
    data: body,
  }).catch((err) => {
    console.log("error");
  });
};

const ContainerHeight = 600;

const SideBarFriendList = () => {
  const [isLoading, setLoading] = useState(false);
  const [friendData, setData] = useState([]);
  const loadMoreData = () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    callApi(null, "GET", null)
      .then((res) => {
        if (res.data) {
          setData([...friendData, ...res.data]);
          setLoading(false);
        }
        // console.log(friendData);

        // fetch("https://624520460e8dd89b5438d03c.mockapi.io/hsocial/enpoint")
        //   .then((res) => res.json())
        //   .then((body) => {
        //     setData([...friendData, ...body]);
        //     setLoading(false);
        //   })
        //   .catch(() => {
        //     setLoading(false);
        //   });
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
    // callApi(null, "GET", null).then((res) => {
    //   if (res.data) {
    //     setData(friendData.concat(res.data));
    //   }
    // });
  }, []);

  //   const onScroll = (e) => {
  //     if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
  //       callApi(null, "GET", null).then((res) => {
  //         if (res.data) {
  //           setData(friendData.concat(res.data));
  //         }
  //       });
  //     }
  //   };

  return (
    <div id='scrollableDiv'>
      <InfiniteScroll
        dataLength={friendData.length}
        next={loadMoreData}
        hasMore={friendData.length < 10}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget='scrollableDiv'>
        <List
          dataSource={friendData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.img} />}
                title={<a href='https://ant.design'>{item.name}</a>}
                description={item.gender}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default SideBarFriendList;
