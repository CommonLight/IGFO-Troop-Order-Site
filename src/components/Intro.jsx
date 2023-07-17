import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/images/IGFO-Logo.png'

const Intro = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate('/enter')}, 5500)
      return () => {
        clearTimeout(redirect)
      }}, [navigate])


  return (
    <div className='introFade'>
      <img src={logo} alt="IGFO Logo"
      style={{
        maxWidth:"100%",
        margin:"auto"}}/>
    </div>
  )
}

export default Intro