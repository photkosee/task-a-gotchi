"use client";

import React, { useState } from "react";

import { Segmented, Breadcrumb } from "antd";
import { HomeOutlined, TrophyOutlined } from "@ant-design/icons";

import AllTime from "./components/AllTime";
import Streak from "./components/Streak";

export default function LeaderboardPage() {
  const [value, setValue] = useState<string | number>("All-time");

  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      title: (
        <>
          <TrophyOutlined />
          <span>Leaderboard</span>
        </>
      ),
    },
  ];

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col items-center
      bg-white py-28 px-10 gap-y-7"
    >
      <div className="w-full flex flex-col gap-10 max-w-md items-center">
        <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />

        <div className="flex flex-col gap-y-7 items-center">
          <h1 className="text-3xl font-bold text-[#2f496d]">Leaderboard</h1>
          <div className="w-[270px]">
            <Segmented
              options={["All-time", "Streak"]}
              block
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div>{value === "All-time" ? <AllTime /> : <Streak />}</div>
      </div>
    </div>
  );
}
