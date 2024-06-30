import React from "react";
import LadderRow from "./LadderRow";

import { Avatar } from "antd";

export default function GotchiShowcase() {
  return (
    <div className="w-[calc(90vw)] max-w-xl flex flex-col gap-y-2">
      <div className="relative h-[170px]">
        <div
          className="absolute flex flex-col gap-y-1 items-center 
          top-0 left-1/2 transform -translate-x-1/2"
        >
          <Avatar
            src={"https://api.dicebear.com/7.x/miniavs/svg?seed=215"}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 3,
              borderColor: "#2f496d",
            }}
            size={100}
          />
          <div>Ford</div>
          <div>🦔</div>
        </div>
      </div>
      <LadderRow name="Subaru" score="🦥" position={2} profile={211} />
      <LadderRow name="Kia" score="🐢" position={3} profile={122} />
      <LadderRow name="Maxda" score="🦧" position={4} profile={213} />
      <LadderRow name="Honda" score="🐡" position={5} profile={214} />
    </div>
  );
}
