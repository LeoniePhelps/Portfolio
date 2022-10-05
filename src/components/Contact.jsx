import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export const Contact = () => {
  return (
    <div
      id="contact"
      class="text-white flex-col items-center text-center mt-20"
    >
      <h1 class="text-6xl font-workSans font-extrabold ">Contact me</h1>

      <section class="flex flex-row justify-center mt-10">
        <a class="mr-4 text-2xl" href={`mailto:leoniehhphelps@gmail.com`}>
          <AiOutlineMail />
        </a>
        <a class="text-[18px]" href={`mailto:leoniehhphelps@gmail.com`}>
          leoniehhphelps@gmail.com
        </a>
      </section>

      <a
        class="text-[#55E6A5] text-4xl flex justify-center mt-3"
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.linkedin.com/in/leonie-phelps-499099223/"}
      >
        <BsLinkedin />
      </a>

      <p class="font-workSans pt-28 text-[#999999]">Leonie Phelps 2022</p>
    </div>
  );
};
