import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import background1 from '../assets/images/Planet-Background.jpg'
import trio from '../assets/images/Trooper-Trio2.png'
import button1 from '../assets/images/button1.png'
import button1b from '../assets/images/button1b.png'

const Information = () => {

  const [backIsHovered, setBackIsHovered] = useState(false)

  const mouseEnterBack = () => {
    setBackIsHovered(true)}
  
  const mouseLeaveBack = () => {
    setBackIsHovered(false)}

  return (
    <div 
    data-bs-theme="dark"
    style={{
        color:"white",
        // borderTop:"solid 2px teal",
        // borderBottom:"solix 2px teal",
        backgroundImage: `url(${background1})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"0px 30px",
        height:"800px"
        }}>
              <div style={{textAlign:"center", marginRight:"20px"}}>
                  <h2 style={{
                    fontFamily:"Audiowide",
                    padding:"30px",
                    color:"#3edddf"
                  }}>Welcome to the IGFO!</h2>

              <div style={{display:"flex"}}>
                  <div style={{width:"800px", margin:"auto", marginLeft:"40px"}}>
                    <img src={trio} alt="trio of stormtroopers" style={{width:"500px"}}/>
                  </div>
                  <p style={{marginTop:"20px"}}>At the Imperial Garrison Fulfillment Office, we take pride in our crucial role as the central hub for fulfilling all orders and logistical operations for imperial troops across the vast expanse of the Galactic Empire. With unrivaled efficiency and unwavering dedication, we ensure that the needs of our imperial forces are met promptly and accurately, enabling them to carry out their duties with utmost precision.
                  <br /><br />
                  Our mission is simple yet pivotal: to deliver exceptional service by providing the Imperial Army, Navy, and other specialized units with the resources they require to maintain order, enforce imperial law, and protect the interests of the Empire. We strive to uphold the highest standards of operational excellence, ensuring that every request is processed swiftly and every shipment reaches its intended destination without delay.
                  <br /><br />
                  The Imperial Garrison Fulfillment Office is an intricate web of interconnected systems and highly skilled personnel working tirelessly to ensure the smooth flow of supplies, armaments, equipment, and other essential resources to the farthest reaches of the galaxy. Our state-of-the-art infrastructure, coupled with advanced supply chain management techniques, allows us to optimize resource allocation, minimize delivery times, and maximize cost-effectiveness.
                  <br /><br />
                  If you possess the drive and commitment to excellence that defines the Imperial Garrison Fulfillment Office, we welcome you to join our esteemed team. Together, we will continue to provide unparalleled support to the brave men and women serving the Galactic Empire, fostering a unified and efficient force that safeguards peace and order throughout the galaxy.
                  </p>
              </div>
          </div>
      <div style={{textAlign:"center"}}>
          <Link to={`/enter`}>
          <Button
              style={{
                  position:"relative",
                  fontFamily:"Audiowide",
                  cursor: "default",
                  padding:"0px",
                  backgroundColor:"transparent",
                  border:"none"}} 
                  variant="dark"
                  onMouseEnter={mouseEnterBack}
                  onMouseLeave={mouseLeaveBack}>
                  {backIsHovered ? (
                  <img src={button1b} alt='highlighted button' style={{
                  backgroundSize: "cover", // Set the desired background size
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",}}/>
                  ) : (<img src={button1} alt='default button' />
                  )}
                  <span
              style={{
                  position:"absolute",
                  top: 0, left: 0, right: 0, bottom: 0, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  zIndex: 1, 
                  color: "white" 
                  }}>BACK TO MAIN</span>
              </Button>
          </Link>
      </div>
    </div>
  )
}

export default Information