import React from "react";

export const NavBar = () => {
  return (
    <header class="text-white flex flex-row justify-center mt-5 font-workSans font-medium">
      <button
        onClick={() => window.location.replace("/#projects")}
        class="mr-5 md:mr-48"
      >
        Projects
      </button>
      <button
        onClick={() => window.location.replace("/#experience")}
        class="mr-5 md:mr-48"
      >
        Experience
      </button>
      <button onClick={() => window.location.replace("/#contact")}>
        Contact
      </button>
    </header>
  );
};
