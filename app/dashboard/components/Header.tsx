"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, Dropdown, MenuProps, Space } from "antd";

import {
  AppstoreAddOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import useAuthStore from "@/app/store/authStore";

const Header = () => {
  const [top, setTop] = useState<boolean>(false);
  const profile = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);
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
      label: "Nest",
      key: "2",
      icon: <AppstoreAddOutlined />,
      onClick: () => {
        router.push("/dashboard/nest");
      },
    },
    {
      label: "Leaderboard",
      key: "3",
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
      key: "4",
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
        <div>Logo</div>

        <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
          <button>
            <Space>
              <Avatar
                src={"https://api.dicebear.com/7.x/miniavs/svg?seed=" + profile}
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
  );
};

export default Header;
