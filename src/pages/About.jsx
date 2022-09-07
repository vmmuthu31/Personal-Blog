import React from "react";
import "./About.css";

function About() {
  React.useEffect(() => {
    document.title = "About Me - Personal Blog of Vm";
    document.querySelectorAll(".tabs a").forEach((e, index) => {
      if (index !== 2) e.classList.remove("open");
      else e.classList.add("open");
    });
  }, []);

  return (
    <div className="about-page">
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h1>Student &amp; Full Stack Developer</h1>
        <p className="fst-italic text-white ">
          Hello Friends, I am Vairamuthu student of Bachelor of Engineering
          <br /> in Computer Science and Engineering at Jaya Engineering
          College.
        </p>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <strong>Birthday:</strong>{" "}
            <span className="text-white">31 March 2003</span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>City:</strong>{" "}
            <span className="text-white">Chennai, India</span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>Degree:</strong>{" "}
            <span className="text-white">
              Bachelor of Engineering Computer Science Engineer
            </span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>College:</strong>{" "}
            <span className="text-white">Jaya Engineering College</span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>Email:</strong>{" "}
            <span className="text-white">
              <a href="mvairamuthu2003@gmail.com">mvairamuthu2003@gmail.com</a>
            </span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>Website:</strong>{" "}
            <span className="text-white">
              <a href="https://vm-portfolio3.netlify.app/">
                https://vm-portfolio3.netlify.app/
              </a>
            </span>
          </div>
          <div className="col-lg-6 mt-2">
            <strong>Freelance:</strong>{" "}
            <span className="text-white">Available</span>
          </div>
          <a
            target="_blank"
            href="https://vm-portfolio3.netlify.app/static/media/MyResume.9470512e94cb54a4cd72.pdf"
          >
            {" "}
            <button className="btn"> Resume</button>
          </a>
        </div>
        <p className="text-white">
          Working as a Open Source Developer in Google Summer of Codes. Created
          a few Projects on Full Stack,
          <br />
          Blockchain, AI/ML and Datascience
        </p>
      </div>
    </div>
  );
}

export default About;
