import React, {useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Registration = () => {


    const [user, setUser] = useState({
        userRank:"",
        userName:"",
        userStation:"",
        userMail:"",
        userPassword:""})

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({...user, [e?.target?.name]: e.target.value})}

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/profiles/create', user)
            .then((response) => {console.log(response)
                navigate(`/profile/${response.data._id}`)
            })
            .catch((error) => {console.log(error)
            setErrors(error.response.data.errors)})} 


  return (
    <div>
        {/* data-bs-theme="dark" style={{color:"white"}} */}
        <h3>New Account Registration</h3>
        <hr />
        <form onSubmit = {submitHandler}>
            
            <label>Imperial Rank</label>
            <Form.Select
            style={{width:"250px", display:"inline-block", margin:"15px"}}
            name='userRank'
            value={user.userRank}
            onChange={changeHandler}>
                <option></option>
                <option value="Private">Private</option>
                <option value="Corporal">Corporal</option>
                <option value="Sergeant">Sergeant</option>
                <option value="Lieutenant">Lieutenant</option>
                <option value="Major">Major</option>
                <option value="Commander">Commander</option>
                <option value="Captain">Captain</option>
                <option value="Colonel">Colonel</option>
                <option value="General">General</option>
                <option value="Admiral">Admiral</option>
                <option value="Grand Admiral">Grand Admiral</option>
            </Form.Select>
            {errors.userRank ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
            {errors.userRank.message}</p> : null}

            <div>
                <label>User Name</label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"15px"}}
                type="text"
                id="username"
                name='userName'
                value={user.userName}
                onChange={changeHandler}/>
                {errors.userName ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                {errors.userName.message}</p> : null}
            </div>

            <label>Current Post</label>
            <Form.Select style={{width:"250px", display:"inline-block", margin:"15px"}}
            name='userStation'
            value={user.userStation}
            onChange={changeHandler}>
                <option></option>
                <option value="Alderaan">Alderaan</option>
                <option value="Bespin">Bespin</option>
                <option value="Corellia">Corellia</option>
                <option value="Coruscant">Coruscant</option>
                <option value="Crait">Crait</option>
                <option value="Dagobah">Dagobah</option>
                <option value="Dantooine">Dantooine</option>
                <option value="Endor">Endor</option>
                <option value="Felucia">Felucia</option>
                <option value="Geonosis">Geonosis</option>
                <option value="Hoth">Hoth</option>
                <option value="Ithor">Ithor</option>
                <option value="Jakku">Jakku</option>
                <option value="Kamino">Kamino</option>
                <option value="Kashyyyk">Kashyyyk</option>
                <option value="Kessel">Kessel</option>
                <option value="Mustafar">Mustafar</option>
                <option value="Naboo">Naboo</option>
                <option value="Ord Mantell">Ord Mantell</option>
                <option value="Sullust">Sullust</option>
                <option value="Tatooine">Tatooine</option>
                <option value="Yavin 4">Yavin 4</option>
                <option value="Patrol - Core Worlds">Patrol - Core Worlds</option>
                <option value="Patrol - Colonies">Patrol - Colonies</option>
                <option value="Patrol - Inner Rim">Patrol - Inner Rim</option>
                <option value="Patrol - Expansion Region">Patrol - Expansion Region</option>
                <option value="Patrol - Mid Rim">Patrol - Mid Rim</option>
                <option value="Patrol - Outer Rim">Patrol - Outer Rim</option>
                <option value="Patrol - Unknown Regions">Patrol - Unknown Regions</option>
            </Form.Select>
            {errors.userStation ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
            {errors.userStation.message}</p> : null}

            <div>
                <label>Imperial Mail</label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"15px"}}
                type="text"
                id="email"
                name='userMail'
                value={user.userMail}
                onChange={changeHandler}/>
                {errors.userMail ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                {errors.userMail.message}</p> : null}
            </div>

            <div>
                <label>Password</label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"15px"}}
                type="text"
                id="encryption"
                name='userPassword'
                value={user.userPassword}
                onChange={changeHandler}/>
                {errors.userPassword ? <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>
                {errors.userPassword.message}</p> : null}
            </div>

            <Button type='submit' style={{margin:"20px"}} variant="outline-dark">Register</Button>
            <Link to={`/enter`}>
                <Button variant="outline-dark">Back to Entry</Button>
            </Link>
            
        </form>

  </div>
  )
}

export default Registration