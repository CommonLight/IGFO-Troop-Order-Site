import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AudioPlayer from '../components/AudioPlayer'

import button1 from '../assets/images/button1.png'
import button1b from '../assets/images/button1b.png'
import background1 from '../assets/images/Planet-Background.jpg'
import background2 from '../assets/images/Empire-Logo-Background.jpg'
import troopcard from '../assets/images/Troopcard.png'
import troopbox from '../assets/images/Troopbox.png'
import invoicebox from '../assets/images/Invoicebox.png'

import stormtrooper from '../assets/images/Stormtrooper.png'
import snowtrooper from '../assets/images/Snowtrooper.png'
import sandtrooper from '../assets/images/Sandtrooper.png'
import shoretrooper from '../assets/images/Shoretrooper.png'
import scouttrooper from '../assets/images/Scouttrooper.png'
import deathtrooper from '../assets/images/Deathtrooper.png'

const trooperImages = {
    'Choose an option': troopcard,
    'Stormtrooper $1000': stormtrooper,
    'Snow Trooper $1500': snowtrooper,
    "Sand Trooper $1500": sandtrooper,
    "Shore Trooper $1500": shoretrooper,
    "Scout Trooper $2000": scouttrooper,
    "Death Trooper $10000": deathtrooper
}

const OrderForm = () => {

    const [troopOrder, setTroopOrder] = useState({
        trooperType: "",
        trooperWeapon: "",
        trooperArmor: "",
        trooperAmount: "",
        subTotal: "",
        taxAmount: "",
        grandTotal: ""
    })
    
    const [trooperImage, setTrooperImage] = useState(troopcard)
    const [typePrice, setTypePrice] = useState(0)
    const [weaponPrice, setWeaponPrice] = useState(0)
    const [armorPrice, setArmorPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [tax, setTax] = useState(0)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    

    const subTotal = (typePrice + weaponPrice + armorPrice) * quantity
    const formattedSubtotal = subTotal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})
    const taxAmount = subTotal * 0.065
    const grandTotal = subTotal + taxAmount
    

    const [placeIsHovered, setPlaceIsHovered] = useState(false)
    const [clearIsHovered, setClearIsHovered] = useState(false)
    const [backIsHovered, setBackIsHovered] = useState(false)


    const mouseEnterPlace = () => {
        setPlaceIsHovered(true)}
      
      const mouseLeavePlace = () => {
        setPlaceIsHovered(false)}
      
      const mouseEnterClear = () => {
        setClearIsHovered(true)}
      
      const mouseLeaveClear = () => {
        setClearIsHovered(false)}
      
      const mouseEnterBack = () => {
        setBackIsHovered(true)}
      
      const mouseLeaveBack = () => {
        setBackIsHovered(false)}


    const changeHandler = (e) => {
        const {name, value} = e.target
        setTroopOrder((prevOrder) => ({
            ...prevOrder, 
            [name]: value})
        )

        setTrooperImage(trooperImages[value])

        const selectedOption = e.target.options[e.target.selectedIndex]
        const price = parseFloat(selectedOption.dataset.price)
        
        if (name === 'trooperAmount') {
            setQuantity(parseInt(price))
            setErrors({ ...errors, trooperAmount: null })
        }else if (name === 'trooperType') {
            setTypePrice(price)
            setErrors({ ...errors, trooperType: null })
        } else if (name ==='trooperWeapon') {
            setWeaponPrice(price)
            setErrors({ ...errors, trooperWeapon: null })
        } else if (name === 'trooperArmor') {
            setArmorPrice(price)
            setErrors({ ...errors, trooperArmor: null })
        }
    setTax(taxAmount)
    }

    useEffect(() => {
        console.log(grandTotal)
        setTroopOrder((prevOrder) => ({
            ...prevOrder,
            subTotal: subTotal,
            taxAmount: taxAmount,
            grandTotal: grandTotal
        }
    ))
    }, [quantity, typePrice, weaponPrice, armorPrice])
  
            
            
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(troopOrder)
        axios.post('http://localhost:8000/api/troops/create', troopOrder)
            .then((response) => {console.log(response)
            navigate(`/order/confirmation/${response.data._id}`)})
            .catch((error) => {console.log(error)
            setErrors(error.response.data.errors)})} 


    const resetOptions= () => {
        setTroopOrder({
            trooperType: "",
            trooperWeapon: "",
            trooperArmor: "",
            trooperAmount: "",
            subTotal:"",
            taxAmount:"",
            grandTotal:""})
        setErrors({})
        setTypePrice(0);
        setWeaponPrice(0);
        setArmorPrice(0);
        setQuantity(1);
        setTax(0);
        setTrooperImage(troopcard);
    }


        


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
            }}>Garrison Fulfillment Form</h2>
       
        <form onSubmit = {submitHandler} style={{textAlign:"right"}}>
            <div className='imageDisplay' style={{display:"flex"}}>
                <div style={{
                    paddingTop:"10px",
                    width:"300px",
                    height:"500px",
                    margin:"auto",
                    padding:"0px",
                    backgroundImage:`url(${troopcard})`,
                    // mixBlendMode:"lighten"
                    }}>
                    

                {troopOrder.trooperType && troopOrder.trooperType !== "Choose an option" && (
                <img src={trooperImages[troopOrder.trooperType]}
                    alt="selectedTrooper"
                    style={{ width: "300px", margin: "0px" }}/>)}
                </div>
                

                <div style={{
                    padding:"15px",
                    paddingRight:"45px",
                    width:"450px",
                    height:"500px",
                    margin:"auto",
                    backgroundImage:`url(${troopbox})`,
                    // mixBlendMode:"screen"
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-end"
                    }}>


                    <div style={{paddingTop:"40px"}}>
                        <label>Trooper</label>
                        <Form.Select
                        style={
                            {width:"250px", 
                            display:"inline-block", 
                            margin:"15px",
                            }}
                        name='trooperType'
                        value={troopOrder.trooperType} 
                        onChange={changeHandler}>
                            <option value="Choose an option" id='option' data-price='0'>Choose an option</option>
                            <option value="Stormtrooper $1000" id='stormtrooper' data-price='1000'>Stormtrooper $1000</option>
                            <option value="Snow Trooper $1500" id='snowtrooper' data-price='1500'>Snow Trooper $1500</option>
                            <option value="Sand Trooper $1500" id='sandtrooper' data-price='1500'>Sand Trooper $1500</option>
                            <option value="Shore Trooper $1500" id='shoretrooper' data-price='1500'>Shore Trooper $1500</option>
                            <option value="Scout Trooper $2000" id='scouttrooper' data-price='2000'>Scout Trooper $2000</option>
                            <option value="Death Trooper $10000" id='deathtrooper'data-price='10000'>Death Trooper $10000</option>
                        </Form.Select>
                        <div style={{textAlign:"center"}}>
                        {errors.trooperType ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                        {errors.trooperType.message}</p> : null}
                        </div>
                        <br />

                        <label>Weapon</label>
                        <Form.Select 
                        style={{width:"250px", 
                        display:"inline-block", 
                        margin:"15px"}}
                        name='trooperWeapon'
                        value={troopOrder.trooperWeapon}
                        onChange={changeHandler}>
                            <option data-price='0'>Choose an option</option>
                            <option value="Light Blasters $0" data-price='0'>Light Blasters $0</option>
                            <option value="Medium Blasters +$100" data-price='100'>Medium Blasters +$100</option>
                            <option value="Heavy Blasters +$200" data-price='200'>Heavy Blasters +$200</option>
                            <option value="Heavy Repeaters +$500" data-price='500'>Heavy Repeaters +$500</option>
                            <option value="Laser Cannons +$1000" data-price='1000'>Laser Cannons +$1000</option>
                            <option value="Rocket Launchers +$2000" data-price='2000'>Rocket Launchers +$2000</option>
                        </Form.Select>
                        <div style={{textAlign:"center"}}>
                        {errors.trooperWeapon ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                        {errors.trooperWeapon.message}</p> : null}
                        </div>
                        <br />
                       
                        <label>Armor</label>
                        <Form.Select
                        style={{
                            width:"250px", 
                            display:"inline-block", 
                            margin:"15px"}}
                        name='trooperArmor'
                        value={troopOrder.trooperArmor}
                        onChange={changeHandler}>
                            <option data-price='0'>Choose an option</option>
                            <option value="Light Plating $0" data-price='0'>Light Plating $0</option>
                            <option value="Medium Plating $100" data-price='100'> Standard Plating $100</option>
                            <option value="Heavy Plating +$200" data-price='200'>Heavy Plating +$200</option>
                            <option value="Reinforced Plating +$500" data-price='500'>Reinforced Plating +$500 </option>
                            <option value="Beskar Composite +$1000" data-price='1000'>Beskar Composite +$1000</option>
                        </Form.Select>
                        <div style={{textAlign:"center"}}>
                        {errors.trooperArmor ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                        {errors.trooperArmor.message}</p> : null}
                        </div>
                        <br />


                        <label>Quantity</label>
                        <Form.Select
                        style={{width:"250px", 
                        display:"inline-block", 
                        margin:"15px"}}
                        name='trooperAmount'
                        value={troopOrder.trooperAmount}
                        onChange={changeHandler}>
                            <option data-price='1'>Choose an option</option>
                            <option value="Team (5 troops)" data-price='5'>Team (5 troops)</option>
                            <option value="Squad (10 troops)" data-price='10'>Squad (10 troops)</option>
                            <option value="Guard (25 troops)" data-price='25'>Guard (25 troops)</option>
                            <option value="Platoon (50 troops)" data-price='50'>Platoon (50 troops)</option>
                            <option value="Troop (100 troops)" data-price='100'>Troop (100 troops)</option>
                            <option value="Company (250 troops)" data-price='250'>Company (250 troops)</option>
                            <option value="Battery (500 troops)" data-price='500'>Battery (500 troops)</option>
                            <option value="Batalion (1,000 troops)" data-price='1000'>Batalion (1,000 troops)</option>
                            <option value="Regiment (5,000 troops)" data-price='5000'>Regiment (5,000 troops)</option>
                            <option value="Division (10,000 troops)" data-price='10000'>Division (10,000 troops)</option>
                            <option value="Corps (25,000 troops)" data-price='25000'>Corps (25,000 troops)</option>
                            <option value="Army (50,000 troops)" data-price='50000'>Army (50,000 troops)</option>
                        </Form.Select>
                        <div style={{textAlign:"center"}}>
                        {errors.trooperAmount ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                        {errors.trooperAmount.message}</p> : null}
                        </div>
                    </div>


                </div>
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
                        <h3 style={{marginBottom:"30px", fontFamily:"Audiowide"}}>Invoice</h3>
                        <hr />
                        <p onChange={changeHandler}>
                            <em style={{color:"#3edddf", fontWeight:"bold"}}>
                                Subtotal: </em>${formattedSubtotal}</p>

                        <p onChange={changeHandler}>
                            <em style={{color:"#3edddf", fontWeight:"bold"}}>
                                Imperial Tax: </em>${taxAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

                        <p onChange={changeHandler}>
                        <em style={{color:"#3edddf", fontWeight:"bold"}}>
                            Grand Total: </em>${grandTotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

                    </div>
                    <hr />

            <Button type='submit'
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
                onMouseEnter={mouseEnterPlace}
                onMouseLeave={mouseLeavePlace}>
                {placeIsHovered ? (
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
                }}>ORDER TROOPS</span>
            </Button>

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
                onClick={resetOptions}
                onMouseEnter={mouseEnterClear}
                onMouseLeave={mouseLeaveClear}>
                {clearIsHovered ? (
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
                }}>CLEAR ORDER</span>
            </Button>
            <br />

            <Link to={'/enter'}>
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
        </form>
    </div>
  )
}

export default OrderForm