import React from "react";
import { SiReact, SiJest, SiExpress, SiExpo } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { ImMap2 } from "react-icons/im";
import { BsChatLeftText, BsArrowLeftRight } from "react-icons/bs";
import { RiCss3Line } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

export const Projects = () => {
  return (
    <div
      id="projects"
      class="pr-5 pl-5 pb-20 md:pl-20 md:pr-20 md:pt-5 bg-white"
    >
      <section class=" flex flex-col items-center">
        <h1 class="font-workSans font-bold text-center text-5xl flex justify-center mt-10">
          My recent work
        </h1>
        <h2 class="font-workSans font-normal flex justify-center text-center mt-5">
          I love creating projects, check out some of the ones I have made
          below.
        </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/LeoniePhelps"}
          class="font-workSans mt-5 md:mt-10 bg-[#55E6A5] p-2 md:p-3 rounded-3xl w-40 border-2 border-black shadow-[5px_3px_0px_1px_black] active:shadow-[0px_0px_0px_1px_black]"
        >
          View my Github
        </a>
      </section>

      {/* HALLPASS APP */}

      <section class="flex flex-col md:flex-row justify-start mt-10 md:mt-20">
        <img
          class="h-[250px] w-[310px] md:h-[420px] md:w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/hallpass.jpg")}
          alt="hallpass app homescreen"
        />
        <article class="md:ml-20">
          <h1 class="pt-5 md:pt-0 font-workSans font-bold text-4xl mt-5">
            Hallpass App
          </h1>
          <section class="flex flex-row flex-wrap mt-5">
            <article class="flex flex-row items-center">
              <SiReact />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">React Native</p>
            </article>
            <article class="flex flex-row items-center ">
              <SiExpo />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Expo</p>
            </article>
            <article class="flex flex-row items-center ">
              <FiDatabase />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Firebase</p>
            </article>
            <article class="flex flex-row items-center ">
              <ImMap2 />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Google Maps API</p>
            </article>
            <article class="flex flex-row items-center ">
              <BsChatLeftText />
              <p class="ml-2 font-workSans">Whereby API</p>
            </article>
          </section>

          <p class="font-workSans mt-5">
            With a concept of "Uber for tutors", our app was designed for
            learners to find personalised tuition in specialised skills from
            local or virtual tutors. What made our app unique is that learners
            could try out equipment from tutors and gain experience with a skill
            before fully committing themselves.
          </p>

          <section class="flex flex-col items-center md:items-start md:flex-row mt-3">
            <section class="flex flex-col">
              <p class="font-workSans md:mr-6">
                We spiked new technologies for this project, and decided to use
                React Native out of curiosity for app development, and Firebase
                following advice that a NoSQL database would suit Hallpass best.
              </p>
              <p class="font-workSans md:mr-9 mt-3">
                As a team we were passionate about Hallpass and unafraid to get
                stuck into overcoming problems. With the perfect balance of
                technical skill and creativity, we were extremely proud of what
                we achieved in 10 days.
              </p>

              <section class="mt-10 mb-8 md:mb-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.youtube.com/watch?v=oLm7I6P8VuM"}
                  class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                >
                  DEMO VIDEO
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://github.com/jamalxwm/hallpass-app"}
                  class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                >
                  REPOSITORY
                </a>
              </section>
            </section>
            {/* <img
              class="h-[200px] w-[210px] md:h-[206px] md:w-[240px] shadow-[5px_5px_0px_1px_black] md:mt-4"
              src={require("../images/team.jpg")}
              alt="hallpass app homescreen"
  />*/}
          </section>
        </article>
      </section>

      {/* NC NEWS FRONT END */}

      <section class="flex flex-col-reverse md:flex-row justify-end mt-20">
        <article class="md:mr-20">
          <h1 class=" pt-5 md:pt-0 font-workSans font-bold text-4xl  mt-5">
            Nc News React App
          </h1>
          <section class="flex flex-row flex-wrap mt-5">
            <article class="flex flex-row items-center">
              <SiReact />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">React JS</p>
            </article>
            <article class="flex flex-row items-center">
              <RiCss3Line />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">CSS</p>
            </article>
            <article class="flex flex-row items-center">
              <BsArrowLeftRight />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Flexbox</p>
            </article>
          </section>

          <p class="font-workSans mt-5">
            React web application which serves as the front-end of a
            Reddit-style news website and app. Users can view, sort and filter
            articles. They can also interact with articles by liking or
            commenting on them. The app utilises React Hooks such as useEffect
            and useState as well as the context API. Styled with CSS and Flexbox
            in a mobile-first approach, allowing the app to be responsive.
          </p>
          <section class="mt-10 md:mt-40">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/LeoniePhelps/FE-NC-News"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              REPOSITORY
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://leoniephelpsncnews.netlify.app/"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              LIVE VERSION
            </a>
          </section>
        </article>
        <img
          class="h-[250px] w-[310px] md:h-[420px] md:w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/nc-news-fe.jpg")}
          alt="nc news app article screens"
        />
      </section>

      {/* NC NEWS BACK END */}

      <section class="flex flex-col md:flex-row justify-start mt-20">
        <img
          class="h-[250px] w-[310px] md:h-[420px] md:w-[580px] shadow-[15px_15px_0px_1px_black]"
          src={require("../images/nc-news-api.jpg")}
          alt="nc news back end api"
        />
        <article class="md:ml-20">
          <h1 class="pt-5 md:pt-0 font-workSans font-bold text-4xl mt-5">
            Nc News API
          </h1>

          <section class="flex flex-row flex-wrap mt-5">
            <article class="flex flex-row items-center">
              <FaNodeJs />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Node.js</p>
            </article>
            <article class="flex flex-row items-center">
              <FiDatabase />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">PostgreSQL</p>
            </article>
            <article class="flex flex-row items-center">
              <SiExpress />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Express</p>
            </article>
            <article class="flex flex-row items-center">
              <SiJest />
              <p class="ml-2 mr-4 md:mr-5 font-workSans">Jest</p>
            </article>
          </section>

          <p class="font-workSans mt-5">
            Nc News is an API designed as the backend for a Reddit-style news
            website and app. The API allows users to send GET, PATCH, POST and
            DELETE requests to an Express server which interacts with a PSQL
            database containing articles, comments, users and topics tables. The
            API was created following a test-driven development approach using
            the Jest testing framework.
          </p>
          <section class="mt-10 md:mt-40">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/LeoniePhelps/BE-NC-News"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              REPOSITORY
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://be-nc-news-production.up.railway.app/api"}
              class="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1.5 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
            >
              LIVE VERSION
            </a>
          </section>
        </article>
      </section>
    </div>
  );
};
