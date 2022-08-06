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
      projectname: "Xper",
      projectthumbnail:
        "https://dev-to-uploads.s3.amazonaws.com/i/ion9y9l2677xtks6thzz.png",
      projectdesc:
        "Xper is a realtime code editor where you can both write and save your code in realtime!",
      github: "https://github.com/Jaagrav/Xper",
      website: "https://xperbycoder.netlify.app",
      tools: ["FirebaseJS", "ReactJS", "AceJS", "MaterialUI"],
    },
    {
      projectname: "CodeX",
      projectthumbnail:
        "https://camo.githubusercontent.com/3e7eda558193d190d18013a9acbcccb0f030e5747ab96c96699bc025d3997001/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f692f3666306c37306437337366376d3772617a786d742e706e67",
      projectdesc:
        "CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API!!!",
      github: "https://github.com/Jaagrav/CodeX",
      website: "https://codexweb.netlify.app/",
      tools: ["ReactJS", "AceJS", "REST API", "Online-Compiler"],
    },
    {
      projectname: "Fragments",
      projectthumbnail:
        "https://dev-to-uploads.s3.amazonaws.com/i/vmtimz4599ns399258gg.png",
      projectdesc:
        "Fragments is a light weight code editor which supports multiple languages, store your code/snippets here for future use.",
      github: "https://github.com/Jaagrav/Fragments",
      website: "https://fragmentsbycoder.netlify.app",
      tools: ["VanillaJS", "AceJS", "LocalStorage"],
    },
    {
      projectname: "Scissor",
      projectthumbnail:
        "https://dev-to-uploads.s3.amazonaws.com/i/a4reysg757efm6ulcyfv.png",
      projectdesc:
        "An online image compressor that runs locally on your browser to quickly compress your images effectively faster than many other online image compressors out there.",
      github: "https://github.com/Jaagrav/Scissor",
      website: "https://scissor.netlify.app",
      tools: ["DownloadJS", "VanillaJS", "CompressJS"],
    },
    {
      projectname: "HortiPedia",
      projectthumbnail: "",
      projectdesc:
        "A Fun Chat App where you can see what your friend types even before he/she sends the text.",
      github: "https://github.com/Jaagrav/ConverseChat",
      website: "https://conversechatv2.netlify.app",
      tools: ["ReactJS", "FirebaseJS"],
    },
    {
      projectname: "LMS",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/LMS.jpeg",
      projectdesc:
        "LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools.",
      github: "https://github.com/vmmuthu31/LMS",
      website: "https://github.com/vmmuthu31/LMS",
      tools: ["ReactJS", "FirebaseJS", "MaterialUI"],
    },
    {
      projectname: "Task-CrudAPP",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/TASK.jpeg",
      projectdesc: "Crud Application used to manage the Task of the User.",
      github: "https://github.com/vmmuthu31/Task-CrudAPP",
      website: "https://github.com/vmmuthu31/Task-CrudAPP",
      tools: ["ElectronJS", "LocalStorage", "React Native", "Drag and Drop"],
    },
    {
      projectname: "Weather_API_App-using-Express",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/weather.jpeg",
      projectdesc:
        "It an Weather Application build using the express get the API from the openweather.org and gives the post request to user.",
      github: "https://github.com/Jaagrav/Snapshot",
      website: "https://snapshotcam.netlify.app",
      tools: ["Image Manipulation", "DownloadJS", "UserMedia"],
    },
    {
      projectname: "Google-Clone-using-React",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/google.png",
      projectdesc:
        "Google Clone made by using the Goolge API with the famous JS Library framework React.",
      github: "https://github.com/vmmuthu31/Google-Clone-using-React",
      website: "https://github.com/vmmuthu31/Google-Clone-using-React",
      tools: ["Android", "Java", "Android Studio"],
    },
    {
      projectname: "NotesApp-using-Node",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/notes.png",
      projectdesc:
        "It is a notes application connected to the database which get the notes from the user and display their needs",
      github: "https://github.com/vmmuthu31/NotesApp-using-Node",
      website: "https://github.com/vmmuthu31/NotesApp-using-Node",
      tools: ["JavaScript", "Sorting Algorithms"],
    },
    {
      projectname: "NetFlix-Clone",
      projectthumbnail:
        "https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/netflix.jpeg",
      projectdesc:
        "This project consist of Home page, Sign up page, Browser page in HTML, CSS and JavaScript.",
      github: "https://github.com/vmmuthu31/netflix-clone",
      website: "https://github.com/vmmuthu31/netflix-clone",
      tools: ["JavaScript"],
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
