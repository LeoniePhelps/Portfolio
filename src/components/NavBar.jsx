import React from "react";
import { BsLinkedin } from "react-icons/bs";

export const NavBar = () => {
  return (
    <header class="text-white flex flex-row justify-center mt-5 font-workSans font-medium ">
      <button
        onClick={() => window.location.replace("/#projects")}
        class="mr-2 md:mr-20"
      >
        Projects
      </button>
      <button
        onClick={() => window.location.replace("/#experience")}
        class="mr-2 md:mr-20"
      >
        Experience
      </button>
      <button onClick={() => window.location.replace("/#contact")}>
        Contact
      </button>

      <a
        class="text-[#55E6A5] text-4xl"
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.linkedin.com/in/leonie-phelps-499099223/"}
      >
        <BsLinkedin />
      </a>
    </header>
  );
};
