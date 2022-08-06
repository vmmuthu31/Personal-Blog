import React from "react";

function BlogsTrailer(props) {
  return (
    <div className="blog-trailer">
      <a className="blog-trailer-link" href={props.link}>
        <div
          className="blog-trailer-thumbnail"
          style={{
            background: `url("${props.thumbnail}")`,
            backgroundSize: "cover",
          }}
        ></div>
      </a>
      <div className="blog-trailer-info">
        <div className="blog-trailer-date">{props.date}</div>
        <a className="blog-trailer-link" href={props.link}>
          <div className="blog-trailer-name">{props.name}</div>
        </a>
        <div className="blog-trailer-desc">{props.desc}</div>
        <a className="blog-trailer-link" href={props.link}>
          Read more →
        </a>
      </div>
    </div>
  );
}

export default BlogsTrailer;
