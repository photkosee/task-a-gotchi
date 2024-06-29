"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Breadcrumb, Button, Modal } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function IncubatorPage() {
  const [loadings, setLoadings] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const showModal = () => {
    localStorage.setItem("gotchi", "1");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    router.push("/dashboard/nest");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    router.push("/dashboard/nest");
  };

  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      href: "/dashboard/nest",
      title: (
        <>
          <AppstoreOutlined />
          <span>Gotchi Nest</span>
        </>
      ),
    },
    {
      title: <span>Incubator</span>,
    },
  ];

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col justify-start items-center
      bg-white px-14 py-28"
    >
      <div className="w-full flex flex-col gap-7 max-w-xl items-center">
        <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />
        <div
          className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-24
          justify-center items-center pt-40"
        >
          <div className="relative">
            <div
              className="text-4xl md:text-5xl lg:text-7xl absolute top-1/2 left-1/2
              transform -translate-x-1/2 -translate-y-1/2"
            >
              🥚
            </div>
            <CountdownCircleTimer
              isPlaying={loadings}
              duration={3.5}
              colors={"#2f496d"}
              onComplete={() => {
                setLoadings(false);
                showModal();
              }}
            ></CountdownCircleTimer>
          </div>
          <Button
            type="primary"
            size="large"
            loading={loadings}
            onClick={() => setLoadings(true)}
          >
            Start Incubating
          </Button>
        </div>
      </div>

      <Modal
        title="You hatched an egg!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex items-center justify-center text-3xl py-10">
          You hatched a 🐨!
        </div>
      </Modal>
    </div>
  );
}
