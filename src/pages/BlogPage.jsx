import React from "react";

import { Link } from "react-router-dom";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";

function BlogPage(props) {
  React.useEffect(() => {
    marked.setOptions({
      highlight: function (code, lang) {
        return hljs.highlight(lang, code).value;
      },
      breaks: true,
      langPrefix: "lang ",
      pedantic: false,
      gfm: true,
      tables: true,
      smartLists: true,
      smartypants: true,
    });
  }, []);

  return (
    <div className="blog-page">
      <div className="blog">
        <div
          className="blog-background"
          style={{ background: `url('background img')` }}
        ></div>
        <div className="blog-container">
          <Link to="/stories" className="back-btn">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
          <div className="blog-title">title</div>
          <div className="blog-postdate">date</div>
          <br />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: "" }}
          ></div>
          <div className="footer">Written by VM</div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
