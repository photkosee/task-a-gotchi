"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "antd";
import CountUp from "react-countup";
import type { StatisticProps } from "antd";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);

const Header = () => {
  const [top, setTop] = useState<boolean>(false);

  useEffect(() => {
    const scrollYPosition = () =>
      window.scrollY > 0 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-[0.35s] ${
        top ? "bg-[#2f496d] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="px-7 flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" passHref>
          <div className="flex flex-row items-center gap-x-1.5 font-bold text-white transform transition-all duration-[0.35s]">
            <img src="./logo.svg" alt="logo" className="h-12" />
            Task A Gotchi
          </div>
        </Link>
        <Link href="/login" passHref>
          <Button
            type="default"
            size="large"
            style={{ fontWeight: "700", color: "#2f496d" }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
