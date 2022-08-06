import React from "react";

import BlogsTrailer from "../components/blogs-trailer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
function Blogs() {
  const classes = useStyles();
  const [blogs, setBlogs] = React.useState([]);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    document.title = "Personal Blog of Vm";

    document.querySelectorAll(".tabs a").forEach((e, index) => {
      if (index !== 1) e.classList.remove("open");
      else e.classList.add("open");
    });
  }, []);

  return (
    <div className="blogs-page">
      <h1>Stories</h1>
      <BlogsTrailer
        key="link"
        name="title"
        desc="previewDesc"
        thumbnail="bg"
        date="date"
        link={"/" + "link"}
      />
    </div>
  );
}

export default Blogs;
