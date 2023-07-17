import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateProfile = () => {

    const [updateUser, setUpdateUser] = useState({
        userRank:"",
        userName:"",
        userStation:"",
        userMail:"",
        userPassword:""})

    const {id} = useParams
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    const changeHandler = (e) => {
        if (e.target.name === 'explicit') {
          setUpdateUser({...updateUser, explicit: e.target.checked})
        } else {
          setUpdateUser({...updateUser, [e.target.name]: e.target.value})}}


          useEffect(() => {
            axios.get(`http://localhost:8000/api/profiles/${id}`)
                .then((response) => {
                    const {data} = response
                    const {userRank, userName, userStation, userMail, userPassword} = data
                    console.log(response.data)
                    setUpdateUser((previousUser) => ({
                        ...previousUser,
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


    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/profiles/update/${id}`, updateUser)
            .then((response) => {console.log(response)
                navigate(`/profile/${response.data._id}`)})
            .catch((error) => {console.log(error)
            setErrors(error.response.data.errors)})} 


    function alertDelete() {
      alert(`YOU ARE REMOVING YOUR ACCOUNT!!! This alert should have a 'YES' or 'NO' button to proceed or cancel`)
    }

  return (
    <div>
        {/* data-bs-theme="dark" style={{color:"white"}} */}
        <h3>Update User Profile</h3>
        NOT WORKING YET... get one user axios problem... also delete button needs work
        <hr />
        <form onSubmit = {submitHandler}>
            <label style={{margin:"20px", marginRight:"10px"}}>Imperial Rank</label>
                <Form.Select
                style={{width:"250px", display:"inline-block"}}
                name='userRank'
                value={updateUser.userRank}
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
                {errors.userRank ? <p style={{color:"red"}}>{errors.userRank.message}</p> : null}

            <div>
                <Form.Label>Username</Form.Label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"10px"}}
                type="text"
                id="username"
                name='userName'
                value={updateUser.userName}
                onChange={changeHandler}/>
                {errors.userName ? <p style={{color:"red"}}>{errors.userName.message}</p> : null}
            </div>

            <label style={{margin:"20px", marginRight:"10px"}}>Current Post</label>
                <Form.Select style={{width:"250px", display:"inline-block"}}
                name='userStation'
                value={updateUser.userStation}
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
                {errors.userStation ? <p style={{color:"red"}}>{errors.userStation.message}</p> : null}

            <div>
                <Form.Label>Imperial Mail</Form.Label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"10px"}}
                type="text"
                id="email"
                name='userMail'
                value={updateUser.userMail}
                onChange={changeHandler}/>
                {errors.userMail ? <p style={{color:"red"}}>{errors.userMail.message}</p> : null}
            </div>

            <div>
                <Form.Label>Password</Form.Label>
                <Form.Control
                style={{width:"250px", display:"inline-block", margin:"10px"}}
                type="text"
                id="encryption"
                name='userPassword'
                value={updateUser.userPassword}
                onChange={changeHandler}/>
                {errors.userPassword ? <p style={{color:"red"}}>{errors.userPassword.message}</p> : null}
            </div>

            <Button type='submit' style={{margin:"20px"}} variant="outline-dark">Apply Changes</Button>
            <Link to={`/profile/:id`}>
                    <Button variant="outline-dark">Cancel</Button>
            </Link>
            <Button style={{margin:"20px"}} variant="outline-dark" onClick={alertDelete}>Delete Account</Button>

        </form>

  </div>
  )
}

export default UpdateProfile