import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import background1 from '../assets/images/Planet-Background.jpg'
import squad from '../assets/images/Stormtrooper-Squad.png'
import button1 from '../assets/images/button1.png'
import button1b from '../assets/images/button1b.png'

const Enter = () => {

const [orderIsHovered, setOrderIsHovered] = useState(false)
const [pastIsHovered, setPastIsHovered] = useState(false)
const [infoIsHovered, setInfoIsHovered] = useState(false)

const mouseEnterOrder = () => {
  setOrderIsHovered(true)}

const mouseLeaveOrder = () => {
  setOrderIsHovered(false)}

const mouseEnterPast = () => {
  setPastIsHovered(true)}

const mouseLeavePast = () => {
  setPastIsHovered(false)}

const mouseEnterInfo = () => {
  setInfoIsHovered(true)}

const mouseLeaveInfo = () => {
  setInfoIsHovered(false)}

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

            <h2 style={{
            textAlign:"center", 
            fontFamily:"Audiowide",
            padding:"30px",
            color:"#3edddf"
            }}>Welcome, General!</h2>

            <p style={{
            textAlign:"center", 
            fontFamily:"Audiowide", 
            fontSize:"14pt", 
            marginTop:"-20px"
            }}>HOW WOULD YOU LIKE TO PROCEED?</p>

       

        <div style={{textAlign:"center"}}>
          {/* <Link to={`/registration`}>
          <Button style={{margin:"20px"}} variant="dark">Registration</Button>
          </Link>

          <Link to={`/login`}>
          <Button variant="dark">Login</Button>
          </Link> */}


          <Link to={`/order`}>
          <Button
          style={{
            position:"relative",
            margin:"10px", 
            fontFamily:"Audiowide",
            cursor: "default",
            padding:"0px",
            backgroundColor:"transparent",
            border:"none"}} 
            variant="dark"
            onMouseEnter={mouseEnterOrder}
            onMouseLeave={mouseLeaveOrder}>
            {orderIsHovered ? (
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
              }}>ORDER TROOPS</span></Button>
          </Link>

          <Link to={`/orders/all`}>
          <Button
          style={{
            position:"relative",
            margin:"10px", 
            fontFamily:"Audiowide",
            cursor: "default",
            padding:"0px",
            backgroundColor:"transparent",
            border:"none"}} 
            variant="dark"
            onMouseEnter={mouseEnterPast}
            onMouseLeave={mouseLeavePast}>
            {pastIsHovered ? (
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
              }}>PAST ORDERS</span></Button>
          </Link>

          <Link to={`/information`}>
          <Button
          style={{
            position:"relative",
            margin:"10px", 
            fontFamily:"Audiowide",
            cursor: "default",
            padding:"0px",
            backgroundColor:"transparent",
            border:"none"}} 
            variant="dark"
            onMouseEnter={mouseEnterInfo}
            onMouseLeave={mouseLeaveInfo}>
            {infoIsHovered ? (
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
              }}>INFORMATION</span></Button>
          </Link>
        </div>
        <div style={{width:"800px", margin:"10px auto"}}>
          <img src={squad} alt="stormtroopers"/>
        </div>
    </div>
  )
}

export default Enter