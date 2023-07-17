import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Profile = () => {
    
    const {id} = useParams()
    
    const [profile, setProfile] = useState({
        userRank:"",
        userName:"",
        userStation:"",
        userMail:"",
        userPassword:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/profiles/${id}`)
            .then((response) => {
                const {data} = response
                const {userRank, userName, userStation, userMail, userPassword} = data
                console.log(response.data)
                setProfile((previousProfile) => ({
                    ...previousProfile,
                    userRank,
                    userName,
                    userStation,
                    userMail,
                    userPassword
                }))
            })
            .catch((error) => {console.log(error)})  
            return() => {localStorage.removeItem('user')}   
    }, [])
  
  return (
    <div style={{backgroundImage:""}}>
        <h3>{profile.userRank} {profile.userName}</h3>
        <hr />
        <div style={{display:"flex"}}>
            <div>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"150px"}}>Imperial Rank</Card.Body>
                </Card>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"250px"}}>{profile.userRank}</Card.Body>
                </Card>
                <br />


                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"150px"}}>Username</Card.Body>
                </Card>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"250px"}}>{profile.userName}</Card.Body>
                </Card>
                <br />


                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"150px"}}>Current Station</Card.Body>
                </Card>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"250px"}}>{profile.userStation}</Card.Body>
                </Card>
                <br />


                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"150px"}}>Imperial Mail</Card.Body>
                </Card>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"250px"}}>{profile.userMail}</Card.Body>
                </Card>
                <br />


                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"150px"}}>Password</Card.Body>
                </Card>
                <Card style={{display:"inline-block"}}>
                    <Card.Body style={{width:"250px"}}>{profile.userPassword}</Card.Body>
                </Card>
                <br />


                <Link to={`/profile/update/:id`}>
                    <Button style={{margin:"20px"}} variant="outline-dark">Edit Profile</Button>
                </Link>

            </div>
            <div style={{
                border:"solid black 1px",
                padding:"15px",
                width:"450px",
                height:"300px",
                margin:"auto",
                display:"inline-block"}}>

                    <Link to={`/order`}>
                        <Button variant="outline-dark">Order Troops</Button>
                    </Link>

                    <Button style={{margin:"20px"}} variant="outline-dark">Past Orders</Button>

                <div style={{
                    border:"solid black 1px",
                    padding:"15px",
                    width:"400px",
                    height:"180px",
                    margin:"auto",
                    display:"inline-block"}}>
                        IMAGE HERE

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile