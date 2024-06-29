import React from "react";

import { Breadcrumb } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

export default function GotchiPage() {
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
          className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-24
          justify-center items-center pt-40"
        ></div>
      </div>
    </div>
  );
}
