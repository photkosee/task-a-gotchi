import Link from "next/link";

import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
      className="w-full py-10 bg-gradient-to-r from-[#EFF1C1] from-10%
      via-[#A7EAE0] via-80% to-[#A3BAED] text-[#2f496d]"
    >
      <div
        className="px-7 flex flex-col justify-between items-center
        max-w-5xl mx-auto sm:flex-row gap-y-7 gap-x-5"
      >
        <div className="order-2 sm:order-1 flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-x-1.5 font-bold text-[#2f496d]">
            <img src="./logo.svg" alt="logo" className="h-12" />
            Task A Gotchi
          </div>
          <div>
            This is a project submitting for UNSW Flagship Hackathon 2024 with a
            theme of promoting healthier habits.
          </div>
        </div>
        <div className="order-1 sm:order-2 flex flex-col gap-3">
          <Link href="https://github.com/photkosee/task-a-gotchi" passHref>
            <Button
              type="default"
              size="large"
              style={{
                fontWeight: "600",
                background: "#2f496d",
                color: "white",
              }}
            >
              <GithubOutlined />
              Source Code
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
