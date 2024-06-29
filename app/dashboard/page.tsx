"use client";

import React, { useState } from "react";

import { Button, Modal, Form, DatePicker, Input, Statistic } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CountUp from "react-countup";
import type { StatisticProps } from "antd";

import HabitCard from "./components/HabitCard";
import useAuthStore from "../store/authStore";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const score = useAuthStore((state) => state.score);
  const streaks = useAuthStore((state) => state.streaks);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div
      className="flex min-h-[calc(100vh-120px)] flex-col items-center
      bg-white px-7 py-28 gap-y-7"
    >
      <div className="w-full flex flex-col sm:flex-row gap-3 max-w-lg sm:justify-between">
        <div
          className="w-full flex-1 rounded-xl border-[1px] p-3 min-h-[150px]
          flex items-center justify-center relative"
        >
          <img
            src="./streak.svg"
            alt="streak"
            className="h-28 absolute left-1/2 top-1/2
            transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-y-0 items-center pt-7">
            <div className="text-3xl font-bold text-[#2f496d]">
              <Statistic value={streaks} formatter={formatter} />
            </div>
            <div className="text-[#2f496d]/80">Days</div>
          </div>
        </div>
        <div
          className="w-full flex-1 rounded-xl border-[1px] p-3 min-h-[150px]
          flex items-center justify-center gap-x-3.5"
        >
          <img src="./trophy.svg" alt="trophy" className="h-20" />
          <div className="flex flex-col gap-y-0">
            <div className="text-[#2f496d]/80">Score</div>
            <div className="text-3xl font-semibold text-[#2f496d]">
              <Statistic value={score} formatter={formatter} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 max-w-md">
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          Add Habit
        </Button>
      </div>

      <div className="w-full flex flex-col gap-2 max-w-lg sm:justify-between">
        <HabitCard />
      </div>

      <Modal
        title="Create your new habit"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form style={{ paddingTop: "20px" }}>
          <Form.Item label="What's your new habit?">
            <Input />
          </Form.Item>
          <Form.Item label="Until when?">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
