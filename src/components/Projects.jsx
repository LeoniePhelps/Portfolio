import React from "react";

export const Projects = () => {
  return (
    <div class="mt-20 bg-white flex flex-col">
      <h1 class="font-workSans font-bold text-4xl flex justify-center mt-10">
        My recent work
      </h1>
      <h2 class="font-workSans font-normal flex justify-center mt-5">
        I love creating projects lol come and have a look at some of the ones
        I've made below
      </h2>

      <section class="flex flex-row justify-center">
        <img
          class="h-60 w-100"
          src={require("../images/hallpass-app.png")}
          alt="hallpass app homescreen"
        />
        <h1 class="font-workSans font-bold text-2xl">Hallpass App</h1>
      </section>
      <section class="flex flex-row justify-center">
        <h1 class="font-workSans font-bold text-2xl">Nc News React App</h1>
        <img
          class="h-60 w-100"
          src={require("../images/nc-news-app.png")}
          alt="nc news app article screens"
        />
      </section>
      <section class="flex flex-row justify-center">
        <img
          class="h-60 w-100"
          src={require("../images/nc-news-api.png")}
          alt="nc news api code"
        />
        <h1 class="font-workSans font-bold text-2xl">Nc News API</h1>
      </section>
    </div>
  );
};
