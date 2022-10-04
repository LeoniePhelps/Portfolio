import React from "react";

export const Experience = () => {
  return (
    <div class="pl-20 pr-20 pt-10 pb-20 bg-[#55E6A5]">
      <h1 class="font-workSans font-bold text-5xl flex text-center justify-center">
        My experience and skills
      </h1>

      <div class="flex flex-row">
        <article class="bg-white">
          <h1>Back-end</h1>
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

        <article class="bg-white ml-20 mr-20">
          <h1>Front-end</h1>
          <p>React JS</p>
          <p>React Native</p>
          <p>Tailwind</p>
          <p>HTML5</p>
          <p>CSS</p>
        </article>

        <article class="bg-white">
          <h1>Best practices</h1>
          <p>Git</p>
          <p>Github</p>
          <p>Paired programming</p>
          <p>Agile</p>
        </article>
      </div>
    </div>
  );
};
