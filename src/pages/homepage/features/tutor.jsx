import React from 'react'
import img_tutor1 from "../../../assets/tutor1.png";
import img_tutor2 from "../../../assets/tutor2.png";
import img_tutor3 from "../../../assets/tutor3.png";
import img_tutor4 from "../../../assets/tutor4.png";
import img_twitter from "../../../assets/twitter.png";
import img_linkedin from "../../../assets/linkedin.png";


function Tutor() {
  return (
    <div className="tutor">
      <div className="page_width">
        <h6>Tutors</h6><br/>
        <p className="top_para">Meet the Heroes</p><br/>
        <p>
        On Weekend UX, instructors from all over the world instruct millions of students. <br/> We offer the knowledge and abilities.
        </p><br/><br/>
        <div className="tutor_inner">
          <div className="tutor_card">
          <img
              className="img_tutor1"
              src={img_tutor1}
              width="80px"
              height="80px"
              alt=""
            ></img>
            <br />
            <p className="para_name">Theresa Webb</p>
            <p className="para_designation">Application Support Analyst <br/>Lead</p>
            <p className="para_description">Former co-founder of <br/> Opendoor. Early staff at<br/>  Spotify and Clearbit.</p>
            <br/> <div className='div_social'>
            <img
              className="img_twitter"
              src={img_twitter}
              width="20px"
              height="20px"
              alt=""
            ></img>
            <img
              className="img_linkedin"
              src={img_linkedin}
              width="20px"
              height="20px"
              alt=""
            ></img></div>
            </div>
            <div className="tutor_card">
            <img
              className="img_tutor2"
              src={img_tutor2}
              width="80px"
              height="80px"
              alt=""
            ></img>
            <br />
            <p className="para_name">Courtney Henry</p>
            <p className="para_designation">Director, Undergraduate<br/> Analytics and Planning </p>
            <p className="para_description">Lead engineering teams at <br/> Figma, Pitch, and Protocol <br/> Labs.</p>
            <br/> <div className='div_social'>
            <img
              className="img_twitter"
              src={img_twitter}
              width="20px"
              height="20px"
              alt=""
            ></img>
            <img
              className="img_linkedin"
              src={img_linkedin}
              width="20px"
              height="20px"
              alt=""
            ></img></div>
            </div>
            <div className="tutor_card">
            <img
              className="img_tutor3"
              src={img_tutor3}
              width="80px"
              height="80px"
              alt=""
            ></img><br />
            <p className="para_name">Albert Flores</p>
            <p className="para_designation">Career Educator</p>
            <p className="para_description">Former PM for Linear, Lambda <br/>School, and On Deck.</p>
            <br/> <br/><br/><div className='div_social'>
            <img
              className="img_twitter"
              src={img_twitter}
              width="20px"
              height="20px"
              alt=""
            ></img>
            <img
              className="img_linkedin"
              src={img_linkedin}
              width="20px"
              height="20px"
              alt=""
            ></img></div>
            </div>
            <div className="tutor_card">
            <img
              className="img_tutor4"
              src={img_tutor4}
              width="80px"
              height="80px"
              alt=""
            ></img><br />
            <p className="para_name">Marvin McKinney</p>
            <p className="para_designation">Co-op & Internships Program <br/>  & Operations Manager</p>
            <p className="para_description">Former frontend dev for <br/>Linear, Coinbase, and <br/>Postscript.</p>
            <br/> <div className='div_social'>
            <img
              className="img_twitter"
              src={img_twitter}
              width="20px"
              height="20px"
              alt=""
            ></img>
            <img
              className="img_linkedin"
              src={img_linkedin}
              width="20px"
              height="20px"
              alt=""
            ></img></div>
            </div>
            </div>

      </div>
    </div>
  )
}

export default Tutor
