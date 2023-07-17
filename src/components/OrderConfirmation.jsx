import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import background1 from '../assets/images/Planet-Background.jpg'
import invoicebox from '../assets/images/Invoicebox.png'
import button1 from '../assets/images/button1.png'
import button1b from '../assets/images/button1b.png'

const OrderConfirmation = () => {

    const{id} = useParams()
    const navigate = useNavigate()

    const [orderSummary, setOrderSummary] = useState({
        trooperType: "",
        trooperWeapon: "",
        trooperArmor: "",
        trooperAmount: "",
        subTotal:"",
        taxAmount:"",
        grandTotal:""
    })


    const [updateIsHovered, setUpdateIsHovered] = useState(false)
    const [cancelIsHovered, setCancelIsHovered] = useState(false)
    const [backIsHovered, setBackIsHovered] = useState(false)


    const mouseEnterUpdate = () => {
        setUpdateIsHovered(true)}
      
      const mouseLeaveUpdate = () => {
        setUpdateIsHovered(false)}
      
      const mouseEnterCancel = () => {
        setCancelIsHovered(true)}
      
      const mouseLeaveCancel = () => {
        setCancelIsHovered(false)}
      
      const mouseEnterBack = () => {
        setBackIsHovered(true)}
      
      const mouseLeaveBack = () => {
        setBackIsHovered(false)}


    useEffect(() => {
        axios.get(`http://localhost:8000/api/troops/${id}`)
            .then((response) => {
                const{data} = response
                const {
                  trooperType, 
                  trooperWeapon, 
                  trooperArmor, 
                  trooperAmount, 
                  subTotal, 
                  taxAmount, 
                  grandTotal} = data
            
                  console.log(response.data)
                  setOrderSummary((recentOrder) => ({
                  ...recentOrder,
                  trooperType,
                  trooperWeapon,
                  trooperArmor,
                  trooperAmount,
                  subTotal,
                  taxAmount,
                  grandTotal
                }))
            })
            .catch((error) => {console.log(error)})
    }, [])


    const deleteOrder = () => {
      const confirmed = window.confirm(`Are you sure you want to cancel this order? Click 'OK' to delete the order and return to the main screen. 'CANCEL' will keep you here at the order confirmation page.`)
      if (confirmed) {
        axios.delete(`http://localhost:8000/api/troops/delete/${id}`)
        .then((response) => {console.log(response)
        navigate(`/enter`)})
        .catch((error) => {console.log(error)})}}


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
      padding:"20px 30px",
      height:"800px",
      display:"flex"
        }}>

 
      <div style={{textAlign:"center", marginRight:"30px"}}>
          <div style={{
              margin:"auto",
              padding:"25px",
              width:"450px",
              height:"500px",
              color:"white",
              textAlign:"center",
              display:"inline-block",
              backgroundImage:`url(${invoicebox})`,
              // mixBlendMode:"screen"
              }}>


              <div style={{paddingTop:"40px"}}>
                  <h3 style={{marginBottom:"30px", fontFamily:"Audiowide"}}>
                  Order Summary</h3>
                  <hr />

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Type: </em>{orderSummary.trooperType}</p>

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Weapon: </em>{orderSummary.trooperWeapon}</p>

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Armor: </em>{orderSummary.trooperArmor}</p>

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Amount: </em>{orderSummary.trooperAmount}</p>
                  <hr />

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Subtotal: </em>${orderSummary.subTotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Imperial Tax: </em>${orderSummary.taxAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

                  <p><em style={{color:"#3edddf", fontWeight:"bold"}}>
                  Grand Total: </em>${orderSummary.grandTotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

              </div>
              <hr/>
          </div>


          <div>

              <Link to={`/order/update/${id}`}>
              <Button
              style={{
                  position:"relative",
                  margin:"0px",
                  scale:"90%",
                  fontFamily:"Audiowide",
                  cursor: "default",
                  padding:"0px",
                  backgroundColor:"transparent",
                  border:"none"}} 
                  variant="dark"
                  onMouseEnter={mouseEnterUpdate}
                  onMouseLeave={mouseLeaveUpdate}>
                  {updateIsHovered ? (
                  <img src={button1b} alt='highlighted button' style={{
                  backgroundSize: "cover",
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
                  }}>UPDATE ORDER</span>
              </Button>
              </Link>


              <Button
              style={{
                  position:"relative",
                  margin:"0px",
                  scale:"90%",
                  fontFamily:"Audiowide",
                  cursor: "default",
                  padding:"0px",
                  backgroundColor:"transparent",
                  border:"none"}} 
                  variant="dark"
                  onClick={deleteOrder}
                  onMouseEnter={mouseEnterCancel}
                  onMouseLeave={mouseLeaveCancel}>
                  {cancelIsHovered ? (
                  <img src={button1b} alt='highlighted button' style={{
                  backgroundSize: "cover",
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
                  }}>DELETE ORDER</span>
              </Button>


              <Link to={`/enter`}>
              <Button
              style={{
                  position:"relative",
                  marginTop:"7px",
                  scale:"90%",
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


      <div style={{textAlign:"center", marginRight:"20px"}}>
        <h2 style={{
        fontFamily:"Audiowide",
        margin:"30px",
        color:"#3edddf"
        }}>Order confirmed, General!</h2>

        <p style={{fontFamily:"Audiowide", fontSize:"14pt", marginTop:"-20px"}}>YOUR TROOPS ARE ON THEIR WAY!</p>
        <p >The IGFO is committed to military excellence and expedience when it comes to supplying the forces that build the backbone of this great Empire. A copy of your invoice will be saved to the Archives and forwarded to the Imperial Military Action Budget for your sector. If we have any questions or notices for you regrading the specifics of your order, we will contact your staff promptly. Keep in mind the IGFO is NOT in direct control of our armories, so should their be shortages or necessary substitutions, it is likely due to the various limitations found in other departments. Any objections with fulfillment should be directed (as always), to the Imperial Relations Office...
        <br /><br />
        NOTICE & DISCLAIMER:
        <br />
        The IGFO and its affiliate departments are not directly responsible for the efficiency, combat accuracy, durability, and overall effectiveness of any of the forces it supplies. Though all soldiers inducted into the Grand Imperial Army have passed rigorous tests and examinations, it has come to our attention that some of our troops have had less than ideal performance on the battle field. A greater emphasis on stormtrooper marksmanship training is currently underway and we are working with the armory to reinforce our trooper suits to better protect against critical damage from small, furry creatures attacking our forces with rocks and sticks. More updates to come...</p>
      </div> 
      
    </div>
  )
}

export default OrderConfirmation