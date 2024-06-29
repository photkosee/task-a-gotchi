"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Input, Form, notification } from "antd";
import InputPassword from "antd/lib/input/Password";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";

import useAuthStore from "@/app/store/authStore";
import loginAction from "@/app/actions/loginAction";

type FieldType = {
  username?: string;
  password?: string;
};

type NotificationType = "success" | "info" | "warning" | "error";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();
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

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    const res = await loginAction(values.username, values.password);
    if (res.status === 200) {
      const message =
        "Welcome " + values.username + "! Navigating to dashboard...";
      openNotificationWithIcon("success", "Logged in", message);
      login(res.token, res.username, res.profile);
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } else {
      openNotificationWithIcon("error", "Error", res.error);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const loginAsGuest = async () => {
    setLoading(true);
    const message = "Welcome! Navigating to dashboard...";
    openNotificationWithIcon("success", "Logged in", message);
    const res = await loginAction("Guest", "Guest");
    if (res.status === 200) {
      login(res.token, res.username, res.profile);
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div
      className="z-10 mx-auto flex max-w-[300px] flex-col items-center
      justify-center gap-y-3"
    >
      {contextHolder}
      <h1 className="text-2xl font-semibold text-[#2f496d]">Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
          <InputPassword
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full"
            size="large"
            loading={loading}
          >
            Log in
          </Button>

          <Button
            block
            className="mt-2 mb-1"
            size="large"
            loading={loading}
            onClick={loginAsGuest}
          >
            Login as guest
          </Button>

          <Link href="/register" passHref>
            <Button type="link" block size="large" disabled={loading}>
              Register new account
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
