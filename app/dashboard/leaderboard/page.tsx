"use client";

import React, { useState } from "react";

import { Segmented } from "antd";

import AllTime from "./components/AllTime";
import Streak from "./components/Streak";

export default function LeaderboardPage() {
  const [value, setValue] = useState<string | number>("All-time");

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col items-center
      bg-white py-28 px-10 gap-y-7"
    >
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <div className="w-[270px]">
        <Segmented
          options={["All-time", "Streak"]}
          block
          value={value}
          onChange={setValue}
        />
      </div>
      <div>{value === "All-time" ? <AllTime /> : <Streak />}</div>
    </div>
  );
}
