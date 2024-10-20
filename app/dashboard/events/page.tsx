"use client";

import React, { useState } from "react";

import { Modal, Breadcrumb } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

import PostCard from "./PostCard";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      title: (
        <>
          <AppstoreOutlined />
          <span>Gotchi Nest</span>
        </>
      ),
    },
  ];

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col items-center
      bg-white px-14 py-28 gap-y-12"
    >
      <div className="w-full flex flex-col gap-7 justify-start items-center">
        <div className="w-full max-w-xl">
          <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />
        </div>
        <div className="w-full flex flex-col gap-10 max-w-md items-center">
          <div className="text-3xl font-bold text-[#2f496d]">
            Community Events
          </div>
          {/* <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          Host an Event
        </Button> */}
        </div>
        <div className="w-full flex flex-wrap gap-3 max-w-5xl justify-center">
          <PostCard
            image={2}
            title="Therapy Session with Dr. Alex"
            description="If you are interested in therapy with Dr. Alex, please join us"
          />
          <PostCard
            image={1}
            title="Yoga Group Session"
            description="Today we are practicing yoga with our friends for a group of 5"
          />
          <PostCard
            image={3}
            title="Discussion Session"
            description="Today we are discussing about the book Animal Farm"
          />
        </div>
      </div>

      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
}
