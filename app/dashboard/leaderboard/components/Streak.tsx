import React from "react";
import LadderRow from "./LadderRow";

import { Avatar } from "antd";
export default function Streak() {
  return (
    <div className="w-[calc(90vw)] max-w-xl flex flex-col gap-y-2">
      <div className="relative h-[170px]">
        <div
          className="absolute flex flex-col gap-y-1 items-center 
          top-0 left-1/2 transform -translate-x-1/2"
        >
          <Avatar
            src={"https://api.dicebear.com/7.x/miniavs/svg?seed=70"}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 3,
              borderColor: "#2f496d",
            }}
            size={100}
          />
          <div>Potato</div>
          <div>75</div>
        </div>
      </div>
      <LadderRow name="Tomato" score="55" position={2} profile={71} />
      <LadderRow name="Carrot" score="50" position={3} profile={77} />
      <LadderRow name="Corn" score="47" position={4} profile={100} />
      <LadderRow name="Garlic" score="35" position={5} profile={74} />
    </div>
  );
}
