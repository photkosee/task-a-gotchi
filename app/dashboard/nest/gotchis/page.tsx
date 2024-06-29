"use client";

import React, { useState } from "react";

import { Breadcrumb } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import useAuthStore from "@/app/store/authStore";

export default function GotchiPage() {
  const [count, setCount] = useState(5);
  const [tmp, setTmp] = useState(false);
  const candy = useAuthStore((state) => state.candy);
  const setCandy = useAuthStore((state) => state.setCandy);

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
      title: <span>Gotchi</span>,
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
          className="flex flex-col gap-y-12 md:gap-y-16lg:gap-y-20
          justify-center items-center pt-40"
        >
          <div
            className={`text-4xl md:text-5xl lg:text-7xl ${
              tmp ? "animate-spin" : "animate-bounce"
            }`}
            onClick={() => {
              setCount((prev) => prev + 1);
              setTmp(true);
              setCandy(candy - 1);
              setTimeout(() => {
                setTmp(false);
              }, 1050);
            }}
            role="button"
          >
            🐋
          </div>

          <div
            className="px-2.5 py-1 bg-white border-[1px] border-[#2f496d] rounded-full
            flex items-center justify-center min-w-[70px]"
          >
            <div>❤️ {count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
