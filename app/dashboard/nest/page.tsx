"use client";

import React, { useEffect, useState } from "react";

import { Breadcrumb } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CollectionPage() {
  const [animal, setAnimal] = useState(localStorage.getItem("gotchi") || "0");
  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      title: (
        <>
          <AppstoreOutlined />
          <span>Gotchi Nest</span>
        </>
      ),
    },
  ];

  useEffect(() => {
    const tmp = localStorage.getItem("gotchi");
    setAnimal(tmp || "0");
  }, []);

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col justify-center items-center
      bg-white px-14 py-28"
    >
      <div className="w-full flex flex-col gap-7 max-w-xl justify-start items-center">
        <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />
        <div className="text-3xl font-bold text-[#2f496d]">Gotchi Nest</div>
        <div
          className="w-[calc(75vw)] h-[calc(75vw)] max-w-xl max-h-[576px] sticky
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

          <div className="grid grid-cols-4 grid-rows-4 absolute top-0 left-0 w-full h-full z-50">
            <Link
              href="/dashboard/nest/eggs"
              className="flex w-full justify-center items-center"
            >
              <div className="text-4xl md:text-5xl lg:text-7xl animate-bounce">
                {animal === "1" ? "🐨" : "🥚"}
              </div>
            </Link>
            <Link
              href="/dashboard/nest/gotchis"
              className="flex w-full justify-center items-center"
            >
              <div className="text-4xl md:text-5xl lg:text-7xl animate-bounce">
                🐋
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
