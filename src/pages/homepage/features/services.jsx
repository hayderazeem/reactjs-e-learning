import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import interaction_design from "../../../assets/interaction_design.png"
import ux_design from "../../../assets/ux_design.png"
import user_interface from "../../../assets/user_interface.png"


const Services = () => {
  return (
    <div className='services'>
 <div className="page_width">
    <h6>Our Services</h6>
    <p>Fostering a playful & engaging learning<br/>environment</p><br />
                <div className="services_inner">
                    <div className='services_card_one'>
                        <div className='card_heading_one'>
                        <img className = "interaction" src={interaction_design} width= "48px" height= "48px" alt=""></img><p>Interaction Design</p>
                        </div><br /><br />
                        <p className='para'>Lessons on design that cover the most recent developments.</p>
                        <br />
                        <div className='div_learn'>
                
                        <p className='learn_more'>Learn More</p> <IoIosArrowForward color='white'/>
                        </div>
                    </div>
                    <div className='services_card_two'>
                        <div className='card_heading_two'>
                        <img className = "interaction" src={ux_design} width= "48px" height= "48px" alt=""></img><p>UX Design Course</p>
                        </div><br /><br />
                        <p className='para'>Classes in development that cover the most recent advancements in web.</p>
                        <br />
                        <div className='div_learn'>
                
                        <p className='learn_more'>Learn More</p> <IoIosArrowForward color='#4AC8AE'/>
                        </div>
                    </div>
                    <div className='services_card_two'>
                        <div className='card_heading_two'>
                        <img className = "interaction" src={user_interface} width= "48px" height= "48px" alt=""></img><p>User Interface Design</p>
                        </div><br /><br />
                        <p className='para'>User Interface Design courses that cover the most recent  trends</p>
                        <br />
                        <div className='div_learn'>
                
                        <p className='learn_more'>Learn More</p> <IoIosArrowForward color='#4AC8AE'/>
                        </div>
                    </div>
                </div>

                </div>      
    </div>
  )
}

export default Services
