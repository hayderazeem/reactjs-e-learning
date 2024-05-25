import React from 'react'
import BannerImg from "../../../assets/Banner_Pic.png"
import briefCase from "../../../assets/briefcase.png"
import idea from "../../../assets/idea.png"
import speaker from "../../../assets/speaker.png"
import circleleft from "../../../assets/circleleft.png"
import circleright from "../../../assets/circleright.png"
import ellipse1 from "../../../assets/10x10.png"
import ellipse2 from "../../../assets/22x22.png"
import CircleImg from "../../../assets/circleimg.png"
import ellipse3 from "../../../assets/42x42.png"
import ellipse4 from "../../../assets/14x14.png"
import duolingo from "../../../assets/duolingo.png"
import Codecov from "../../../assets/Codecov.png"
import User_Testing from "../../../assets/User_Testing.png"
import Magic_Leap from "../../../assets/Magic_Leap.png"
import progress_circle from "../../../assets/progress_circle.png"
import education from "../../../assets/online_education.png"
import tutor from "../../../assets/online_tutor.png"
const Banner = () => {
  return (
<div className='banner'>
            <div className="page_width">
                <div className="banner_inner">
                    <div className="content">
                    <img className="circleleft" src={circleleft} width= "414px" height= "414px" alt=""></img>
                    <img className="ellipse1" src={ellipse1} width= "10px" height= "10px" alt=""></img>
                        <h2>
                        Up Your <span>Skills</span> <br />
                            To <span>Advance</span> Your <br/><span>Career</span> Path
                        </h2>
                        <p>
                        Learn UI-UX Design skills with weekend UX . The latest online<br/> learning system and material that help your knowledge growing.                        </p>
                        <div className="div_btn">
                            <input type="button" className='btn_started' value={"Get Started"}/>
                            <input type="button" className='btn_trail' value={"Get free trial"}/>
                        </div>
                        <div className="div_txt">
                            <div className='div_img_txt'>
                            <img src={speaker} width= "32px" height= "32px" alt=""></img>
                            <p>Public Speaking</p>
                            </div>
                            <div className='div_img_txt'>
                            <img src={briefCase} width= "32px" height= "32px" alt=""></img>
                            <p>Career-Oriented</p></div>
                            <div className='div_img_txt'>
                            <img src={idea} width= "32px" height= "32px" alt=""></img>
                            <p>Creative Thinking</p></div>
                        </div>
                        <img className="ellipse2" src={ellipse2} width= "22px" height= "22px" alt=""></img>
                    </div>
                    <div className="img">
                        <img src={BannerImg} width= "495px" height= "495px" alt="" />
                        <img className = "circleimg" src={CircleImg} width= "495.72px" height= "495.72px" alt="" />
                        <img className = "ellipse3" src={ellipse3} width= "42.84px" height= "42.84px" alt="" />
                        <img className = "circleright" src={circleright} width= "414px" height= "414px" alt="" />
                        <img className = "ellipse4" src={ellipse4} width= "14px" height= "14px" alt="" />
                        <div className = 'online_courses'><img className = "progress_circle" src={progress_circle} width= "80px" height= "80px" alt=""></img><p>5K+ <br /><span>Online Courses</span></p></div>
                        <div className = 'online_education'><img className = "education" src={education} width= "47px" height= "47x" alt=""></img><p>2K+ <br /><span>Video Courses</span></p></div>
                        <div className = 'online_tutor'><img className = "tutor" src={tutor} width= "48.96px" height= "48.96px" alt=""></img><p>Tutors<br /><span>250+</span></p></div>
                    </div>
                </div>
                <div className='div_brand'><br/>
                    <p>250+ <span>
Collaboration</span></p>
                <img className = "duolingo" src={duolingo} width= "153.14px" height= "36px" alt="" />
                <img className = "Codecov" src={Codecov} width ="186.25px" height = "36px" alt="" />
                <img className = "User_Testing" src={User_Testing} width="140.25px" height="36px" alt="" />
                <img className = "Magic_Leap" src={Magic_Leap} width= "234.5px" height= "36px"  alt="" />
                </div>
            </div>
        </div>
  )
}

export default Banner
