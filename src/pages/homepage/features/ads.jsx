import React from 'react'
import Logo from '../../../assets/logo.png'
import Avatar from '../../../assets/Avatar.png'
function Ads() {
  return (
    <div className="ads">
    <div className="page_width">
    <div className="ads_inner">
    <img src={Logo} width="79.83px" height="72px" alt="" /><br /><br />
      <h1>Courses was fantastic! It is Master platform for those <br /> looking to start a new career, or need a refresher.</h1><br/>
    <br />  <img src={Avatar} width="64px" height="64px" alt="" /><br /><br />
      <p>Jacob Jones <br /><span>Student, National University</span></p>
      </div>
      </div>
    </div>
  )
}

export default Ads
