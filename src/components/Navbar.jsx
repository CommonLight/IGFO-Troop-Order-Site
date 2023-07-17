import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import header from '../assets/images/Headerbar.png'

const Navbar = () => {
  return (
    <div>
        <div style={{
          backgroundImage:`url(${header})`,
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          height:"100px",
          width:"100%",
          margin:"auto"

          }}>
          

            {/* <div style={{textAlign:"center", marginTop:"-40px"}}>
                <a href="/">Intro</a> | <a href="/enter">Enter</a> | <a href="/information">Information</a> | <a href="/registration">Registration</a> | <a href="/login">Login</a> | <a href="/profile/:id">Profile</a> | <a href="/profile/update/:id">Update Profile</a> | <a href="/order">Order Troops</a> | <a href="/order/confirmation/:id">Confirmation</a>
                <hr/>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar