import React from "react";

export const Header = () => {
  return (
    <div class="text-white flex-col items-center mt-28 pl-5 pr-5 md:pl-40 md:pr-40">
      <h1
        id="title"
        class="text-7xl md:text-8xl font-workSans font-extrabold text-center"
      >
        Hi, I'm Leonie
      </h1>

      <h2 class="md:mt-40 mt-28 font-workSans font-bold text-center text-[20px]">
        Software developer with a passion for problem solving and a desire to
        create.
      </h2>

      <h2 class="font-workSans text-center mt-5">
        I decided to become a software developer because I love creating useful
        products that enrich peoples lives. Most recently, I have had an amazing
        time training in full-stack software development at Northcoders and am
        motivated to further my skills in existing and new technologies.
      </h2>
      <h2 class="font-workSans flex justify-center text-center pb-20 mt-3">
        Previously I worked as a Search Engine Evaluator, where I contributed to
        improving the world’s leading search engine with the aim of improving
        user experience and training machine learning algorithms.
      </h2>
    </div>
  );
};
