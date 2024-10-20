"use client";

import React, { useState } from "react";
import { LoginOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Card, Skeleton } from "antd";

const { Meta } = Card;

interface PostCardProps {
  image: number;
  title: string;
  description: string;
}

const PostCard = ({ image, title, description }: PostCardProps) => {
  const [loading, setLoading] = useState(false);

  let imageSource =
    "https://images.pexels.com/photos/373465/pexels-photo-373465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  if (image === 1) {
    imageSource =
      "https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  } else if (image === 2) {
    imageSource =
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <Card
      hoverable
      style={{ width: 270 }}
      cover={<img alt="post" src={imageSource} className="h-[185px]" />}
      actions={[
        <div key="join" className="flex gap-1 items-center justify-center">
          <LoginOutlined />
          Interest
        </div>,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=` + image}
              style={{
                backgroundColor: "white",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#2f496d",
              }}
            />
          }
          title={title}
          description={description}
        />
      </Skeleton>
    </Card>
  );
};

export default PostCard;
