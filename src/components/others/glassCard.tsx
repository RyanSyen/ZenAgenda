"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { PlusIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Image from "next/image";
import { Calendar } from "../ui/calendar";
import { useState } from "react";

const GlassCard = () => {
  const monthYear = dayjs().format("MMMM YYYY");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="absolute bg-[rgba(255,255,255,.01)] border border-[rgba(255,255,255,.1)] p-2 rounded-3xl top-[415px] left-1/2 translate-x-[-50%] h-fit w-[416px]">
      {/* absolute top-[415px] left-[50%] translate-x-[-50%] */}
      <div className="glasscard    rounded-xl p-5 bg-[rgba(3,0,20,0.3)] backdrop-blur-md h-fit w-[400px] border border-[rgba(255,255,255,.1)] ">
        <div className="flex justify-around items-center">
          <Avatar className=" rounded-full bg-[#141414] ">
            <AvatarImage
              src="/img/others/person-neon.png"
              alt="person"
              width={32}
              height={32}
            />
          </Avatar>
          <span>{monthYear}</span>
          <PlusIcon />
        </div>
        <hr className="border-y-[1.5px] my-4 border-[rgba(3,0,20,0.1)]" />
        <div className="flex justify-center items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md shadow w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
