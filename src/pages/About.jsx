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
        <h3>Student &amp; Full Stack Developer</h3>
        <p className="fst-italic">
          Hello Friends, I am Vairamuthu student of Bachelor of Engineering in
          Computer Science and Engineering at Jaya Engineering College.
        </p>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Birthday:</strong> <span>31 March 2003</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                <span>Chennai, India</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                <span>Bachelor of Engineering Computer Science Engineer</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>College:</strong> <span>Jaya Engineering College</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                <span>
                  <a href="mvairamuthu2003@gmail.com">
                    mvairamuthu2003@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Website:</strong>{" "}
                <span>
                  <a href="https://vm-portfolio3.netlify.app/">
                    https://vm-portfolio3.netlify.app/
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-2">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>Freelance:</strong> <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Working as a Open Source Developer in Google Summer of Codes. Created
          a few Projects on Full Stack, a few basic HTML Websites, developed
          Agicultural Websites for the farmers and Community Forum.
        </p>
      </div>
    </div>
  );
}

export default About;
