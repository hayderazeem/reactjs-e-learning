import React from "react";
import Youtube1 from '../../assets/Youtube1.png' 
import Facebook1 from '../../assets/Facebook1.png'
import Instagram1 from '../../assets/Instagram1.png'
import Twitter1 from '../../assets/Twitter1.png'
import Map from '../../assets/map.png'
import Box1 from '../../assets/box1.png'
import Box3 from '../../assets/box3.png'
import Box4 from '../../assets/box4.png'
function Form() {
  return (
    <div className="form">
             <img className="box1"src={Box1} alt="" width= "153.44px" height= "153.44px"/>
             <img className="box2"src={Box1} alt="" width= "153.44px" height= "153.44px"/>
             <img className="box3"src={Box3} alt="" />
             <img className="box4"src={Box4} alt="" />
      <div className="page_width">
        <div className="form_inner">
          <h3>CONTACT US</h3>
          <div className="content">
            <div className="div_input">
              <p>Leave us a message</p>
              <br />
              <input
                className="name"
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
              />
              <br />
              <br />
              <input
                className="email"
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <br />
              <br />
              <textarea
                className="message"
                type="textarea"
                id="textarea"
                name="textarea"
                placeholder="Enter Your Message"
              />
              <br />
              <br />
              <br />
              <input
                className="send"
                type="button"
                id="button"
                name="button"
                value="Send"
              />
            </div>
            <div className="div_map">
              <p className="address">
                Weekend UX <br />
                B 37/3 Ground Floor Double <br />
                StoryRamesh Nagar , Near Raja Garden <br /> Chowk.Delhi: 110015
              </p>
              <br />
              <p className="phone">+91 9599272754</p>
              <br />
              <p className="eaddress">hello@info.com.ng</p><br />
              <div className="socialmedia">
              <img className = "Youtube1" src={Youtube1} width= "22.26px" height= "15.86px" alt=""/>
              <img className = "Instagram1" src={Instagram1} width= "16px" height= "15.86px" alt=""/>

              <img className = "Facebook1" src={Facebook1} width= "7.47px" height= "15.86px" alt=""/>
              <img className = "Twitter1" src={Twitter1} width= "19.36px" height= "15.86px" alt=""/>
             
              </div><br /><br />
              <img className='map' src={Map} alt=""  width= "348px" height= "155px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
