import React from "react";

export const Projects = () => {
  return (
    <div class="pl-3 pr-3 bg-white">
      <section class="mt-20 flex flex-col">
        <h1 class="font-workSans font-bold text-4xl flex justify-center mt-10">
          My recent work
        </h1>
        <h2 class="font-workSans font-normal flex justify-center mt-5">
          I love creating projects lol come and have a look at some of the ones
          I've made below
        </h2>
      </section>

      <section class="flex flex-row justify-start mt-8 pl-20">
        <img
          class="h-48 w-64"
          src={require("../images/hallpass-app.png")}
          alt="hallpass app homescreen"
        />
        <article>
          <h1 class="font-workSans font-bold text-2xl">Hallpass App</h1>
          <button>DEMO VIDEO</button>
          <button>REPOSITORY</button>
        </article>
      </section>

      <section class="flex flex-row justify-end mt-8 pr-20">
        <article>
          <h1 class="font-workSans font-bold text-2xl">Nc News React App</h1>
          <button>LIVE VERSION</button>
          <button>REPOSITORY</button>
        </article>
        <img
          class="h-48 w-64"
          src={require("../images/nc-news-app.png")}
          alt="nc news app article screens"
        />
      </section>

      <section class="flex flex-row justify-start mt-8 pl-20">
        <img
          class="h-48 w-64"
          src={require("../images/nc-news-api.png")}
          alt="nc news api code"
        />
        <article>
          <h1 class="font-workSans font-bold text-2xl">Nc News API</h1>
          <button>REPOSITORY</button>
          <button>LIVE VERSION</button>
        </article>
      </section>
    </div>
  );
};
