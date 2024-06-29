import React from "react";

import { Breadcrumb } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

export default function CollectionPage() {
  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      title: (
        <>
          <AppstoreOutlined />
          <span>Nest</span>
        </>
      ),
    },
  ];

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col justify-center items-center
      bg-white px-14 py-28"
    >
      <div className="w-full flex flex-col gap-10 max-w-md justify-start items-center">
        <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />
        <div
          className="w-[calc(75vw)] h-[calc(75vw)] max-w-2xl max-h-[672px] sticky
          overflow-hidden border-[10px] lg:border-[12px] border-[#6D5719] rounded-xl"
        >
          <div className="grid grid-cols-4 grid-rows-4 absolute top-0 left-0 w-full h-full">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <div
                key={i}
                className="bg-[url('/nest.svg')] bg-[#836B31] bg-cover"
                style={{
                  boxShadow:
                    "inset 2px 2px 0 rgba(255, 255, 255, 0.07), inset -2px -2px 0 #665233",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
