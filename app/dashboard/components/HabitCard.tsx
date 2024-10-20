"use client";

import React, { useEffect, useState } from "react";
import { ColorPicker, Button, Modal, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import Calendar from "react-github-contribution-calendar";

import useAuthStore from "@/app/store/authStore";

interface HabitCardProps {
  task: string;
  untilInput: string;
  valuesInput: any;
}

export default function HabitCard({
  task,
  untilInput,
  valuesInput,
}: HabitCardProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("#1677ff");
  const [streaks, setStreaks] = useState(0);
  const setScore = useAuthStore((state) => state.setScore);
  const setCandy = useAuthStore((state) => state.setCandy);
  const score = useAuthStore((state) => state.score);
  const candy = useAuthStore((state) => state.candy);
  const [values, setValues] = useState<any>(valuesInput);

  const until = untilInput;
  const panelAttributes = { rx: 3, ry: 3 };

  const onTick = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    setScore(score + 1);
    setCandy(candy + 1);
    setValues((prevValues: any) => ({
      ...prevValues,
      [formattedDate]: 2,
    }));
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const countConsecutiveDays = () => {
    const dates = Object.keys(values).sort();
    let maxStreak = 0;
    let currentStreak = 0;
    let prevDate: string | number | Date | null = null;

    dates.forEach((date) => {
      if (prevDate) {
        const currentDate = new Date(date);
        const previousDate = new Date(prevDate);
        previousDate.setDate(previousDate.getDate() + 1);

        if (currentDate.getTime() === previousDate.getTime()) {
          currentStreak++;
        } else {
          currentStreak = 1;
        }
      } else {
        currentStreak = 1;
      }

      prevDate = date;
      maxStreak = Math.max(maxStreak, currentStreak);

      setStreaks(maxStreak);
    });
  };

  useEffect(() => {
    countConsecutiveDays();
  }, [values]);

  return (
    <div
      className="w-full rounded-xl border-[1px] py-3 px-3 md:px-5 min-h-[100px]
      flex flex-col justify-between items-center gap-y-5 shadow-md relative"
    >
      <div
        className="w-full flex flex-col md:flex-row md:justify-between items-center
        gap-y-3 gap-x-5"
      >
        <div className="max-w-[180px] md:max-w-[250px] truncate">{task}</div>
        <div className="flex gap-x-5 items-center">
          <div className="relative flex gap-x-1 items-center">
            <img src="./fire.svg" alt="streak" className="h-[18px]" />
            <div className="text-md font-semibold text-[#2f496d]">
              {streaks}
            </div>
          </div>
          <div className="relative flex gap-x-1 items-center">
            <img src="./trophy.svg" alt="trophy" className="h-5" />
            <div className="text-md font-semibold text-[#2f496d]">
              {Object.keys(values).length}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <Calendar
          values={values}
          until={until}
          weekLabelAttributes={undefined}
          monthLabelAttributes={undefined}
          panelAttributes={panelAttributes}
          panelColors={["#EEEEEE", theme, theme, theme, theme]}
        />
        <div className="w-full flex gap-3 justify-between items-center">
          <ColorPicker
            defaultValue="#1677ff"
            size="small"
            showText
            onChange={(color) => setTheme(color.toHexString())}
          />
          <Button className="" onClick={onTick}>
            Done
          </Button>
        </div>
      </div>

      <Modal
        title="Congratulations!"
        open={open}
        onOk={onClose}
        onCancel={onClose}
      >
        <Result
          icon={<SmileOutlined />}
          title="Great, you did it! You got an egg!"
        />
      </Modal>
    </div>
  );
}
