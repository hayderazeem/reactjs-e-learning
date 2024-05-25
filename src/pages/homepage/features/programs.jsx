import React from "react";
import img_figma from "../../../assets/Figma.png";
import img_learn from "../../../assets/Learn.png";
import img_interface from "../../../assets/Interface.png";
import img_Avatar1 from "../../../assets/Avatar1.png";
import img_Avatar2 from "../../../assets/Avatar2.png";
import img_Avatar3 from "../../../assets/Avatar3.png";
import { MdArrowOutward } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className="programs">
      <div className="page_width">
        <h6>Explore Programs</h6>
        <p className="top_para">Our Most Popular Class</p>
        <p>
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
        <br />
        <br />
        <div className="programs_inner">
          <div className="programs_card_one">
            <img
              className="img_figma"
              src={img_figma}
              width="336px"
              height="240px"
              alt=""
            ></img>
            <br />
            <br />
            <p>Design</p>
            <br />
            <div className="card_heading">
              <p>Figma UI UX Design..</p> <MdArrowOutward />
            </div>
            <br />
            <p className="para">
              Use Figma to get a job in UI Design, User Interface, User
              Experience design.
            </p>
            <br />
            <div className="card_rating">
              <p>4.3</p> <FaStar color="#FF9B26" /> <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" /> <span>(16,325)</span>
            </div>
            <br />
            <br />
            <div className="card_profile">
              <img
                className="img_Avatar"
                src={img_Avatar1}
                width="40px"
                height="40px"
                alt=""
              ></img>
              <p>
                Jane Cooper <br /> <span>2001 Enrolled</span>
              </p>
              <h3>$17.84</h3>
            </div>
          </div>
          <div className="programs_card_one">
            <img
              className="img_learn"
              src={img_learn}
              width="336px"
              height="240px"
              alt=""
            ></img>
            <br />
            <br />
            <p>Design</p>

            <br />
            <div className="card_heading">
              <p>Learn With Shoaib</p> <MdArrowOutward />
            </div>
            <br />
            <p className="para">
              Design Web Sites and Mobile Apps that Your Users Love and Return
              to Again.
            </p>
            <br />
            <div className="card_rating">
              <p>3.9</p> <FaStar color="#FF9B26" /> <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" /> <span>(832)</span>
            </div>
            <br />
            <br />
            <div className="card_profile">
              <img
                className="img_Avatar"
                src={img_Avatar2}
                width="40px"
                height="40px"
                alt=""
              ></img>
              <p>
                Jenny Wilson <br /> <span>2001 Enrolled</span>
              </p>
              <h3>$8.99</h3>
            </div>
          </div>
          <div className="programs_card_one">
            <img
              className="img_interface"
              src={img_interface}
              width="336px"
              height="240px"
              alt=""
            ></img>
            <br />
            <br />
            <p>Design</p>
            <br />
            <div className="card_heading">
              <p>Building User Interface..</p> <MdArrowOutward />
            </div>
            <br />
            <p className="para">
              Learn how to apply User Experience (UX) principles to your website
              designs.
            </p>
            <br />
            <div className="card_rating">
              <p>4.2</p> <FaStar color="#FF9B26" /> <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" />
              <FaStar color="#FF9B26" /> <span>(125)</span>
            </div>
            <br />
            {/* <br /> */}
            <div className="card_profile">
              <img
                className="img_Avatar"
                src={img_Avatar3}
                width="40px"
                height="40px"
                alt=""
              ></img>
              <p>
                Esther Howard <br /> <span>2001 Enrolled</span>
              </p>
              <h3>$11.70</h3>
            </div>
          </div>
        </div>
        <div className="div_btn">
        <input type="button" className='btn_programs' value={"Explore All Programs"}/>
        </div>
        
        </div>
    </div>
  );
};

export default Programs;
