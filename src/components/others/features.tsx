"use client";

import { features } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "@/utils/motion";

const Feature = () => {
  return (
    <section className="absolute flex flex-wrap justify-center gap-8 px-8 w-[80vw] bottom-[-500px] xs:bottom-[150px] sm:bottom-[35px] left-1/2 translate-x-[-50%]">
      {features.map((feat, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="flex flex-col justify-center items-center md:items-start w-32 h-32 sm:h-auto sm:w-[150px] md:w-[250px] green-pink-gradient border rounded-[20px] p-5 shadow-card "
          >
            <div className="pb-4 pt-2">{feat.icon}</div>
            <div className="text-[#fcfcfc] font-medium text-base text-center md:text-start">
              {feat.title}
            </div>
            <div className="text-[#efedfd99] pt-2 hidden md:block">
              {feat.desc}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Feature;
