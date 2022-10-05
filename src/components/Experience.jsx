import React from "react";

export const Experience = () => {
  return (
    <div id="experience" class="font-workSans pt-10 pb-20 bg-[#55E6A5]">
      <h1 class="font-bold text-5xl flex text-center justify-center pb-10">
        My experience and skills
      </h1>

      <div class="flex flex-col justify-center items-center md:flex-row">
        <article class="bg-white rounded-2xl p-5 w-60 h-70 shadow-[4px_4px_0px_6px_black]">
          <h1 class="text-2xl text-bold mb-5">Back-end</h1>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>PostgreSQL</p>
          <p>Jest</p>
          <p>Test driven development</p>
          <p>REST APIs</p>
          <p>Supertest</p>
          <p>Firebase</p>
        </article>

        <article class="bg-white rounded-2xl p-5 w-60 h-70 pb-28 shadow-[4px_4px_0px_6px_black] md:ml-20 md:mr-20 mt-10 md:mt-0 mb-10 md:mb-0">
          <h1 class="text-2xl text-bold mb-5">Front-end</h1>
          <p>React JS</p>
          <p>React Native</p>
          <p>Tailwind</p>
          <p>HTML5</p>
          <p>CSS</p>
        </article>

        <article class="bg-white rounded-2xl p-5 w-60 h-70 pb-32 shadow-[4px_4px_0px_6px_black]">
          <h1 class="text-2xl text-bold mb-5">Best practices</h1>
          <p>Git</p>
          <p>Github</p>
          <p>Paired programming</p>
          <p>Agile</p>
        </article>
      </div>
    </div>
  );
};
