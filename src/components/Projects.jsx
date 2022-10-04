import React from "react";

export const Projects = () => {
  return (
    <div id="projects" class="pl-20 pr-20 bg-white">
      <section class="mt-20 flex flex-col items-center">
        <h1 class="font-workSans font-bold text-5xl flex justify-center mt-10">
          My recent work
        </h1>
        <h2 class="font-workSans font-normal flex justify-center mt-5">
          I love creating projects lol come and have a look at some of the ones
          I've made below
        </h2>
        <a
          href={"https://github.com/LeoniePhelps"}
          class="font-workSans mt-10 bg-[#55E6A5] p-3 rounded-3xl w-40 border-2 border-black shadow-[5px_3px_0px_1px_black] active:shadow-[0px_0px_0px_1px_black]"
        >
          View my Github
        </a>
      </section>

      {/* HALLPASS APP */}

      <section class="flex flex-row justify-start mt-20">
        <img
          class="h-[420px] w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/hallpass-app.png")}
          alt="hallpass app homescreen"
        />
        <article class="ml-20">
          <h1 class="font-workSans font-bold text-3xl mt-5">Hallpass App</h1>
          <p class="font-workSans mr-20 mt-8">
            Full stack React Native application with Cloud Firestore database,
            designed for anyone interested in learning a skill or hobby, and
            trying out equipment. Users are managed with Firebase
            authentication, where they can then view a list of tutors and filter
            by skill categories. Utilising Google Maps API, users can also view
            tutor locations on a map for in-person lessons. After booking a
            lesson, A user can post a review and star rating. Styled with CSS
            and Figma.
          </p>
          <section class="mt-40">
            <a
              href={"https://www.youtube.com/watch?v=QcP7aeKNtMc"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              DEMO VIDEO
            </a>
            <a
              href={"https://github.com/jamalxwm/hallpass-app"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              REPOSITORY
            </a>
          </section>
        </article>
      </section>

      {/* NC NEWS FRONT END */}

      <section class="flex flex-row justify-end mt-20">
        <article class="mr-20">
          <h1 class="font-workSans font-bold text-3xl ml-20 mt-5">
            Nc News React App
          </h1>
          <p class="font-workSans ml-20 mt-8">
            React web application which serves as the front-end of a news
            website and app. Users can view, sort and filter articles. They can
            also interact with articles by liking or commenting on them. The app
            utilises React Hooks such as useEffect and useState as well as the
            context API. Styled with CSS and Flexbox in a mobile-first approach,
            allowing the app to be responsive.
          </p>
          <section class="mt-40">
            <a
              href={"https://github.com/LeoniePhelps/FE-NC-News"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 ml-20 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              REPOSITORY
            </a>
            <a
              href={"https://leoniephelpsncnews.netlify.app/"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              LIVE VERSION
            </a>
          </section>
        </article>
        <img
          class="h-[420px] w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/nc-news-app.png")}
          alt="nc news app article screens"
        />
      </section>

      {/* NC NEWS BACK END */}

      <section class="flex flex-row justify-start mt-20 pb-20">
        <img
          class="h-[420px] w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/nc-news-api.png")}
          alt="nc news api code"
        />
        <article class="ml-20">
          <h1 class="font-workSans font-bold text-3xl mt-5">Nc News API</h1>
          <p class="font-workSans mr-20 mt-8">
            Northcoders news is an API designed as the backend for a news
            website and app. The API allows users to send GET, PATCH, POST and
            DELETE requests to an Express server which interacts with a PSQL
            database containing articles, comments, users and topics tables. The
            API was created following a test-driven development approach using
            the JEST testing framework.
          </p>
          <section class="mt-40">
            <a
              href={"https://github.com/LeoniePhelps/BE-NC-News"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              REPOSITORY
            </a>
            <a
              href={"https://leonie-phelps-nc-news-be.herokuapp.com/api"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              LIVE VERSION
            </a>
          </section>
        </article>
      </section>
    </div>
  );
};
