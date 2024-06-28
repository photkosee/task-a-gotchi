import React from "react";

import { Avatar } from "antd";

interface LadderRowProps {
  name: string;
  score: string;
  position: number;
  profile: number;
}

export default function LadderRow({
  name,
  score,
  position,
  profile,
}: LadderRowProps) {
  return (
    <div
      className="flex justify-between items-center rounded-lg w-full border-[1px]
      px-3 py-2"
    >
      <div className="flex items-center gap-x-2">
        <div className="text-neutral-400"># {position}</div>
        <Avatar
          src={"https://api.dicebear.com/7.x/miniavs/svg?seed=" + profile}
          style={{
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#2f496d",
          }}
          size={37}
        />
      </div>
      <div className="truncate max-w-[70px] lg:max-w-[150px]">{name}</div>{" "}
      <div>{score}</div>
    </div>
  );
}
