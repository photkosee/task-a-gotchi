import React from "react";
import LadderRow from "./LadderRow";

import { Avatar } from "antd";

export default function AllTime() {
  return (
    <div className="w-[calc(90vw)] max-w-xl flex flex-col gap-y-2">
      <div className="relative h-[170px]">
        <div
          className="absolute flex flex-col gap-y-1 items-center 
          top-0 left-1/2 transform -translate-x-1/2"
        >
          <Avatar
            src={"https://api.dicebear.com/7.x/miniavs/svg?seed=7"}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#2f496d",
            }}
            size={100}
          />
          <div>Name</div>
          <div>Score</div>
        </div>
      </div>
      <LadderRow name="Name" score="Score" position={1} profile={1} />
      <LadderRow name="Name" score="Score" position={1} profile={1} />
      <LadderRow name="Name" score="Score" position={1} profile={1} />
    </div>
  );
}
