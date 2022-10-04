import React from "react";

export const NavBar = () => {
  return (
    <div class="text-white flex flex-row justify-center font-workSans font-medium mt-10">
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
    </div>
  );
};
