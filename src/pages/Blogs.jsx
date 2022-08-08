import React from "react";

import BlogsTrailer from "../components/blogs-trailer";

function Blogs() {
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
        name="What is my Contribution in GSOC'22 Midterm Evaluation"
        desc="
        It is not an internship at Google, or anything working with Google. Make sure your relative does not post it on the WhatsApp group, so…..
        
        In simple words, google summer of code is a program that promotes or provides an opportunity for Open Source Contributions in Open source Organizations.
        
        First Google announces the program officially and starts the application for an Open source organization to participate, then the open-source organization is announced along with its projects for GSoC, then contributors contact and submit the proposal for a project at the respective organization. Then after evaluating the proposal, the organization Admin sent the list of students from their end, then google provides the slots and announces the accepted contributors and Projects for each organization."
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyw4WEGJefrS-hQSFvoVhYc1fvwZ7Y6Qi7kfbKmGvpvX0q5aPl7mrcm5L1rrRhz9hrmpM&usqp=CAU"
        date="Jun 29"
        link={
          "https://medium.com/@mvairamuthu20000/how-i-crack-gsoc-2022-8e33005a02ff"
        }
      />
      <BlogsTrailer
        key="link"
        name="Learning About WX-Notations"
        desc="What is WX-Notation:
        WX notation is a transliteration scheme for representing Indian languages in ASCII. This scheme originated at IIT Kanpur for computational processing of Indian languages and is widely used in the natural language processing (NLP) community in India. The notation (though unidentified) is used, for example, in a textbook on NLP from IIT Kanpur.[1] The salient features of this transliteration scheme are: Every consonant and every vowel has a single mapping into Roman."
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUHTr1JRZPTtQd149US0alVQ138IJ9LDjsg&usqp=CAU"
        date="Jul 16"
        link={
          "https://medium.com/@mvairamuthu20000/learning-about-wx-notations-21af128f5db4"
        }
      />
      <BlogsTrailer
        key="link"
        name="How I crack GSoC 2022"
        desc="What is Google Summer of Code?
        It is not an internship at Google, or anything working with Google. Make sure your relative does not post it on the WhatsApp group, so…..
        
        In simple words, google summer of code is a program that promotes or provides an opportunity for Open Source Contributions in Open source Organizations.
        
        First Google announces the program officially and starts the application for an Open source organization to participate, then the open-source organization is announced along with its projects for GSoC, then contributors contact and submit the proposal for a project at the respective organization. Then after evaluating the proposal, the organization Admin sent the list of students from their end, then google provides the slots and announces the accepted contributors and Projects for each organization."
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyw4WEGJefrS-hQSFvoVhYc1fvwZ7Y6Qi7kfbKmGvpvX0q5aPl7mrcm5L1rrRhz9hrmpM&usqp=CAU"
        date="Jun 29"
        link={
          "https://medium.com/@mvairamuthu20000/how-i-crack-gsoc-2022-8e33005a02ff"
        }
      />
    </div>
  );
}

export default Blogs;
