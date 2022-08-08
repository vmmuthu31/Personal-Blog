import React from "react";

import ProjectsTrailer from "../components/projects-trailer";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects - Personal Blog of Vm";
    document.querySelectorAll(".tabs a").forEach((e, index) => {
      if (index !== 0) e.classList.remove("open");
      else e.classList.add("open");
    });
  }, []);
  let projects = [
    {
      projectname: "Departmental Website",
      projectthumbnail:
        "https://user-images.githubusercontent.com/88650559/180494873-43f4d449-20c4-461c-8df4-7dbb133e9960.png",
      projectdesc:
        "It is our college departmental website built in react components.!",
      github: "https://github.com/vmmuthu31/JEC-CSE",
      website: "https://jec-site.netlify.app/",
      tools: ["ReactJS", "MaterialUI", "Bootstrap"],
    },
    {
      projectname: "HortiPedia",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/Horti.png",
      projectdesc:
        "Hortipedia is a question and answer website for professional and developing farmers.",
      github: "https://github.com/E-ggle/HortiPedia",
      website: "https://github.com/E-ggle/HortiPedia",
      tools: ["ReactJS", "Express", "Mongodb", "Nodejs", "REST API"],
    },
    {
      projectname: "Twitter in Web3",
      projectthumbnail:
        "https://user-images.githubusercontent.com/88650559/179293522-f79adfc6-2c7d-4a4c-813b-756c7bec0af2.png",
      projectdesc:
        "Nextjs is used for frontend, solidity is for implementation of smart contracts, sanity.i.o is used to manage the text and images.",
      github: "https://github.com/vmmuthu31/Twitter-using-web3-and-blockchain",
      website: "https://github.com/vmmuthu31/Twitter-using-web3-and-blockchain",
      tools: ["NextJS", "Bootstrap", "SanityIo", "Metamask", "Web3"],
    },
    {
      projectname: "Dynamic Portfolio",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/Images/readme-img.png",
      projectdesc:
        "It is Portfolio website where the developers can modify it according to the user needs.",
      github: "https://github.com/vmmuthu31/My_Portfolio",
      website: "https://vm-portfolio3.netlify.app",
      tools: ["ReactJS", "Bootstrap", "Type-writter"],
    },
    {
      projectname: "E-ggle Educational Website",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/e-ggle.png",
      projectdesc:
        "This website is where you can get popular courses which can improve your skills at the next level.",
      github: "https://github.com/vmmuthu31/E-ggle",
      website: "https://e-ggle.netlify.app/",
      tools: ["ReactJS", "Bootstrap", "React-icons"],
    },
    {
      projectname: "Project Management System",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/Project-Management-System/main/Screenshot%20(44).png",
      projectdesc:
        "It was built in MERN stack by using the GraphQL for the API call. It was an Dynamic Application where the user can Create/Read/Update/Delete the content.",
      github: "https://github.com/vmmuthu31/Project-Management-System",
      website: "https://github.com/vmmuthu31/Project-Management-System",
      tools: ["ReactJs", "ExpressJS", "MongoDB", "NodeJS", "GraphQL"],
    },

    {
      projectname: "LMS",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/LMS.jpeg",
      projectdesc:
        "LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools.",
      github: "https://github.com/vmmuthu31/LMS",
      website: "https://github.com/vmmuthu31/LMS",
      tools: ["ReactJs", "ExpressJS", "MongoDB", "NodeJS", "RESTAPI"],
    },
    {
      projectname: "Task-CrudAPP",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/TASK.jpeg",
      projectdesc: "Crud Application used to manage the Task of the User.",
      github: "https://github.com/vmmuthu31/Task-CrudAPP",
      website: "https://github.com/vmmuthu31/Task-CrudAPP",
      tools: ["ReactJs", "ExpressJS", "MongoDB", "NodeJS"],
    },
    {
      projectname: "Weather_API_App-using-Express",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/weather.jpeg",
      projectdesc:
        "It an Weather Application build using the express get the API from the openweather.org and gives the post request to user.",
      github: "https://github.com/Jaagrav/Snapshot",
      website: "https://snapshotcam.netlify.app",
      tools: ["Rest API", "ExpressJS", "MongoDB", "NodeJS"],
    },
    {
      projectname: "Google-Clone-using-React",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/google.png",
      projectdesc:
        "Google Clone made by using the Goolge API with the famous JS Library framework React.",
      github: "https://github.com/vmmuthu31/Google-Clone-using-React",
      website: "https://github.com/vmmuthu31/Google-Clone-using-React",
      tools: ["ReactJS", "Google-API", "Bootstrap"],
    },
    {
      projectname: "NotesApp-using-Node",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/notes.png",
      projectdesc:
        "It is a notes application connected to the database which get the notes from the user and display their needs",
      github: "https://github.com/vmmuthu31/NotesApp-using-Node",
      website: "https://github.com/vmmuthu31/NotesApp-using-Node",
      tools: ["NodeJS", "HTML"],
    },
    {
      projectname: "Calculator in Reactjs",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/calc.png",
      projectdesc: "A simple Calculator Application built in React js.",
      github: "https://github.com/vmmuthu31/CalcinReact",
      website: "https://u2r4k.csb.app/",
      tools: ["ReactJS"],
    },
    {
      projectname: "NetFlix-Clone",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/netflix.jpeg",
      projectdesc:
        "This project consist of Home page, Sign up page, Browser page in HTML, CSS and JavaScript.",
      github: "https://github.com/vmmuthu31/netflix-clone",
      website: "https://github.com/vmmuthu31/netflix-clone",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      projectname: "Tic-Tac-Toe",
      projectthumbnail:
        "https://user-images.githubusercontent.com/88650559/177109813-8d71d61e-6449-45c7-a8a2-081207a96161.png",
      projectdesc:
        "Fragments is a light weight code editor which supports multiple languages, store your code/snippets here for future use.",
      github: "https://github.com/vmmuthu31/tic-tac-toe-",
      website: "https://vm-tictactoe.netlify.app/",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      projectname: "Drum Kit",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/drumkit.png",
      projectdesc: "Drumkit completely made by using JS and HTML.",
      github: "https://github.com/vmmuthu31/Drumkit",
      website: "https://vmmuthu31.github.io/Drumkit/",
      tools: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-page">
        {projects.map((item) => (
          <ProjectsTrailer
            key={item.github}
            projectname={item.projectname}
            projectthumbnail={item.projectthumbnail}
            projectdesc={item.projectdesc}
            github={item.github}
            website={item.website}
            tools={item.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
