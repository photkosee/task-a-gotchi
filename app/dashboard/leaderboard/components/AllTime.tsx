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
            src={"https://api.dicebear.com/7.x/miniavs/svg?seed=13"}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 3,
              borderColor: "#2f496d",
            }}
            size={100}
          />
          <div>Papaya</div>
          <div>112</div>
        </div>
      </div>
      <LadderRow name="Apple" score="110" position={2} profile={17} />
      <LadderRow name="Peach" score="85" position={3} profile={1} />
      <LadderRow name="Lemon" score="77" position={4} profile={10} />
      <LadderRow name="Lemon" score="70" position={5} profile={12} />
    </div>
  );
}
