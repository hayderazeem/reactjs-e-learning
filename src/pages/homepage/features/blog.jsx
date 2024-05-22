import React from "react";
import Image1 from "../../../assets/Image.png";
import Image2 from "../../../assets/Image2.png";
import Image3 from "../../../assets/Image3.png";
function Blog() {
  return (
    <div className="blog">
      <div className="page_width">
        <p>Our recent blogs</p>
        <div className="blog_inner">
          <div className="blog_card">
            <img src={Image1} width="320px" height="200px" alt="" />
            <img src={Image2} width="320px" height="200px" alt="" />
          </div>
          <div className="blog_card2">
            <p className="para_date">November 16, 2014</p>
            <h5>Three Pillars of User Delight</h5>
            <p>
              Delight can be experienced <br /> viscerally, behaviourally, and
              <br />
              reflectively. A great design is ...
            </p>
            <br />
            <div className="div_btn">
              
              <p className="para_research">Research</p>
              <p className="para_ui">UI UX</p>
            </div>
            <br />
            <p className="para_date">September 24, 2017</p>
            <h5>UX Mapping Methods</h5>
            <p>
              Visual-design principles can be <br /> applied consistently
              throughout <br /> the process of creating a <br /> polished UX
              map...
            </p>
            <div className="div_btn">
             
              <p className="para_research">Research</p>{" "}
              <p className="para_ui">UI Design</p>
            </div>
          </div>
          <div className="blog_card3">
            <img src={Image3} width="592px" height="240px" alt="" />
            <p className="para_date">March 13, 2014</p>
            <h5>Agile Development Projects and Usability</h5>
            <p>
            Agile methods aim to overcome usability barriers in traditional development, <br /> but post new threats to user experience quality. 
            </p>
            <div className="div_btn">
             
              <p className="para_programming">Programming</p>
              <p className="para_research">Research</p>
              <p className="para_develop">Developments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
