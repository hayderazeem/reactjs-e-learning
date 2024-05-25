import React from "react";
import img_about1 from '../../assets/img_about1.png'
import img_about2 from '../../assets/img_about2.png'
import img_about3 from '../../assets/img_about3.png'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'




function AboutUs() {
  return (
    <div className="aboutus">
      <div className="page_width">
        <div className="about_inner">
          <div className="content">
            <h3>About Us</h3>
            <p>
            <span>  WEEKEND UX </span> Providing The Best Opportunities To The Students Around The Glob.
            </p>
            <p className="para">
              Weekend UX, is a UI/UX Design Academy in Delhi involved in User
              Experience and User Interface Training and Consulting. It was
              started in 2023 and passionate towards User Interface Design/ User
              Experience Design, Human Computer Interaction Design. Humanoid is
              gushing towards competence to acquire knowledge and have a wide
              understanding towards the sphere through the foremost courses in
              the area of UI/UX Design, by strengthening up your skills, for
              your golden future
            </p><br />
            <input
                className="joinus"
                type="button"
                id="button"
                name="button"
                value="Join Us"
              />
          

          <div className="box"></div>
            <img className='img_about3' src={img_about3} alt=""  width= "434px" height= "471px"/>

          </div>
          <div className="div_img">
            <div className="box"></div>
            <img className='img_about1' src={img_about1} alt=""  width= "376px" height= "246px"/>
            <img className='img_about2' src={img_about2} alt=""  width= "376px" height= "246px"/>

            <div className="content">
            <h3>Features</h3><br />
            <p>
            We are always working to provide you best of the features in all aspects.
            </p><br />
            <p className="para">
            At WEEKENDUX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.
          <br /><br /> <br /> You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.
            </p><br /><br />
            <input
                className="learn_more"
                type="button"
                id="button"
                name="button"
                value="Learn More"
              />
          </div>
            </div>
        </div>
<div className="div_benefits">
<h3>Our Benefits</h3><br />
<p>By Joining WEEKENS UX Platform,<br /> One Can Avail a Lot Of Benefits.</p><br />
<p className="para">Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best.</p>
</div>
    <div className="about_bottom">
          <div className="div_box1">            <img className='one' src={one} alt=""  width= "54px" height= "54px"/> <br /><br />

          <h3>Standardization</h3><br />
          <p>When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... <span>Read More</span></p>
</div>
          <div className="div_box2">            <img className='two' src={two} alt=""  width= "54px" height= "54px"/> <br /><br />
          <h3>Reduced Costs</h3><br />
          <p>With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span>Read More</span></p>
</div>
          <div className="div_box1">            <img className='three' src={three} alt=""  width= "54px" height= "54px"/> <br /><br />
          <h3>More Customization</h3><br />
          <p>ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... <span>Read More</span></p>
</div>
          <div className="div_box2">            <img className='four' src={four} alt=""  width= "54px" height= "54px"/> <br /><br />
          <h3>Affordable Pricing</h3><br />
          <p>With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span>Read More</span></p>
</div>
          <div className="div_box1">            <img className='five' src={five} alt=""  width= "54px" height= "54px"/> <br /><br />
          <h3>Learner Satisfaction</h3><br />
          <p>If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... <span>Read More</span></p>
</div>
          <div className="div_box2">            <img className='six' src={six} alt=""  width= "54px" height= "54px"/> <br /><br />
          <h3>Multimedia Materials</h3><br />
         <p>One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... <span>Read More</span></p>
</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
