"use client";

import { useState } from "react";

import {
  Avatar,
  Breadcrumb,
  Button,
  Popconfirm,
  PopconfirmProps,
  notification,
} from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import useAuthStore from "@/app/store/authStore";
import updateProfileAction from "@/app/actions/updateProfileAction";

type NotificationType = "success" | "info" | "warning" | "error";

export default function ProfilePage() {
  const token = useAuthStore((state) => state.token);
  const username = useAuthStore((state) => state.username);
  const profile = useAuthStore((state) => state.profile);
  const profileLimit = useAuthStore((state) => state.profileLimit);
  const setProfile = useAuthStore((state) => state.setProfile);
  const [random, setRandom] = useState<String>(profile || "50");
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (
    type: NotificationType,
    title: string,
    message: string
  ) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    if (profileLimit) {
      const res = await updateProfileAction(random?.toString(), token || "");
      if (res.status === 200) {
        openNotificationWithIcon("success", "Profile updated", "");
        setProfile(res.profile);
      } else {
        openNotificationWithIcon("error", "Error", res.error);
      }
    } else {
      openNotificationWithIcon(
        "error",
        "Quota limit reached",
        "You have already updated your profile once."
      );
    }
  };

  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    {
      title: (
        <>
          <UserOutlined />
          <span>Profile</span>
        </>
      ),
    },
  ];

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col justify-center items-center
      bg-white px-14 py-28"
    >
      {contextHolder}
      <div className="w-full flex flex-col gap-10 max-w-md justify-start">
        <Breadcrumb items={breadcrumbItems} style={{ alignSelf: "start" }} />
        <div className="flex flex-col max-w-sm items-center gap-y-3 self-center">
          <p className="text-2xl font-semibold text-[#2f496d] truncate">
            {username}
          </p>
          <div className="flex flex-col gap-2 items-center">
            <Avatar
              shape="square"
              size={125}
              src={"https://api.dicebear.com/7.x/miniavs/svg?seed=" + random}
              style={{
                backgroundColor: "white",
                borderStyle: "solid",
                borderWidth: 3,
                borderColor: "#2f496d",
              }}
            />
            <Button
              type="default"
              onClick={() =>
                setRandom((Math.floor(Math.random() * 100) + 1).toString())
              }
            >
              Shuffle Avatar 🎲
            </Button>
          </div>
          <Popconfirm
            title="Update Profile"
            description="You can only update your profile once."
            onConfirm={confirm}
            okText="Update"
            cancelText="Cancel"
          >
            <Button type="primary">Save changes</Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
}
