import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import background1 from '../assets/images/Planet-Background.jpg'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import button1 from '../assets/images/button1.png'
import button1b from '../assets/images/button1b.png'

const PastOrders = () => {

  const [pastOrders, setPastOrders] = useState([])
  const [sortedOrders, setSortedOrders] = useState([])
  const [sortBy, setSortBy] = useState('newest')
  const [activeOrders, setActiveOrders] = useState([])

  const [newestIsHovered, setNewestIsHovered] = useState(false)
  const [oldestIsHovered, setOldestIsHovered] = useState(false)
  const [backIsHovered, setBackIsHovered] = useState(false)


  const mouseEnterNewest = () => {
      setNewestIsHovered(true)}
    
    const mouseLeaveNewest = () => {
      setNewestIsHovered(false)}
    
    const mouseEnterOldest = () => {
      setOldestIsHovered(true)}
    
    const mouseLeaveOldest = () => {
      setOldestIsHovered(false)}
    
    const mouseEnterBack = () => {
      setBackIsHovered(true)}
    
    const mouseLeaveBack = () => {
      setBackIsHovered(false)}


    useEffect(() => {
      axios.get('http://localhost:8000/api/troops')
      .then(response => setPastOrders(response.data))
      .catch(error => console.log(error))
    }, [])


    useEffect(() => {
      sortOrders()
    }, [sortBy, pastOrders])


    const sortOrders = () => {
      const data = [...pastOrders]
      switch (sortBy) {
        
        case 'newest':
          setSortedOrders(data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)))
        break;
          
        case 'oldest':
          setSortedOrders(data.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt)))
        break;
      
        default:
          break;
          
      }
    }


    const deleteOrder = (orderId) => {
      axios.delete(`http://localhost:8000/api/troops/delete/${orderId}`)
          .then((response) => {console.log(response)
          const updatedOrders = sortedOrders.filter((order) => order._id !== orderId)
          setSortedOrders(updatedOrders)})
          .catch((error) => {console.log(error)
      })
    }

    useEffect(() => {
      axios
        .get('http://localhost:8000/api/troops')
        .then((response) => {
          setPastOrders(response.data);
          setActiveOrders(response.data);
        })
        .catch((error) => console.log(error));
    }, [deleteOrder]);
 


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
            }}>Past Fulfillment Orders</h2>

            <div style={{textAlign:"center", marginTop:"-20px", marginBottom:"20px"}}>
            <Button
                    style={{
                        position:"relative",
                        fontFamily:"Audiowide",
                        cursor: "default",
                        padding:"0px",
                        backgroundColor:"transparent",
                        border:"none"}} 
                        variant="dark"
                        onClick={() => setSortBy('newest')}
                        onMouseEnter={mouseEnterNewest}
                        onMouseLeave={mouseLeaveNewest}>
                        {newestIsHovered ? (
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
                        }}>BY NEWEST</span>
                    </Button>

                    <Button
                    style={{
                        position:"relative",
                        fontFamily:"Audiowide",
                        cursor: "default",
                        padding:"0px",
                        backgroundColor:"transparent",
                        border:"none"}} 
                        variant="dark"
                        onClick={() => setSortBy('oldest')}
                        onMouseEnter={mouseEnterOldest}
                        onMouseLeave={mouseLeaveOldest}>
                        {oldestIsHovered ? (
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
                        }}>BY OLDEST</span>
                    </Button>
            </div>


        <div style={{width:"1200px", margin:"auto", maxHeight: '480px', overflowY: 'auto' }}>
          <Table striped bordered hover>
            <thead>
              <tr style={{fontFamily:"Audiowide"}}>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>DATE</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>TYPE</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>WEAPON</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>ARMOR</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>AMOUNT</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>INVOICE</th>
                <th style={{paddingLeft:"15px", backgroundColor:"#0a3b3f"}}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order, index) => (
                <tr key={index}>
                <td style={{paddingLeft:"15px"}}>{moment(order.createdAt).format('M/D/YYYY')}</td>
                <td style={{paddingLeft:"15px"}}>{order.trooperType}</td>
                <td style={{paddingLeft:"15px"}}>{order.trooperWeapon}</td>
                <td style={{paddingLeft:"15px"}}>{order.trooperArmor}</td>
                <td style={{paddingLeft:"15px"}}>{order.trooperAmount}</td>
                <td style={{paddingLeft:"15px"}}>${order.grandTotal?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                <td style={{paddingLeft:"15px"}}>
                  <Button style={{
                    cursor:"default", 
                    fontFamily:"Audiowide", 
                    fontSize:"10pt"}} 
                    variant="dark"
                    onClick={() => deleteOrder(order._id)}>
                    DELETE</Button></td>
                </tr>
                ))}
            </tbody>
          </Table>
        </div>


        <div style={{textAlign:"center"}}>
            <Link to={`/enter`}>
            <Button
              style={{
                  position:"relative",
                  marginTop:"16px",
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

export default PastOrders