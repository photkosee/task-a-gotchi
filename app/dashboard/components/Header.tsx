"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, Dropdown, MenuProps, Space } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
  TrophyOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import useAuthStore from "@/app/store/authStore";

const Header = () => {
  const [top, setTop] = useState<boolean>(false);
  const profile = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);
  const candy = useAuthStore((state) => state.candy);
  const router = useRouter();

  useEffect(() => {
    const scrollYPosition = () =>
      window.scrollY > 0 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "0",
      icon: <HomeOutlined />,
      onClick: () => {
        router.push("/dashboard");
      },
    },
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
      onClick: () => {
        router.push("/dashboard/profile");
      },
    },
    {
      label: "Gotchi Nest",
      key: "2",
      icon: <AppstoreOutlined />,
      onClick: () => {
        router.push("/dashboard/nest");
      },
    },
    {
      label: "Events",
      key: "3",
      icon: <TeamOutlined />,
      onClick: () => {
        router.push("/dashboard/events");
      },
    },
    {
      label: "Leaderboard",
      key: "4",
      icon: <TrophyOutlined />,
      onClick: () => {
        router.push("/dashboard/leaderboard");
      },
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "5",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        logout();
        router.push("/login");
      },
    },
  ];

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-[0.35s] ${
        top ? "bg-[#2f496d] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="px-7 flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/dashboard" passHref>
          <div
            className={`flex flex-row items-center gap-x-1.5 font-bold ${
              top ? "text-white" : "text-[#2f496d]"
            } transform transition-all duration-[0.35s]`}
          >
            <img src="./logo.svg" alt="logo" className="h-12" />
            Task A Gotchi
          </div>
        </Link>

        <div className="flex items-center gap-x-3">
          <div
            className="px-2.5 py-1 bg-white border-[1px] border-[#2f496d] rounded-full
            flex items-center gap-x-2"
          >
            <img src="./candy.svg" alt="candy" className="h-7" />
            <div>{candy}</div>
          </div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <button>
              <Space>
                <Avatar
                  src={
                    "https://api.dicebear.com/7.x/miniavs/svg?seed=" + profile
                  }
                  style={{
                    backgroundColor: "white",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#2f496d",
                  }}
                  size={50}
                />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
