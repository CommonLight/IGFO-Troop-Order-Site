import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()

    const loginHandler = async (event) => {
        event.preventDefault()
            try {

                const response = await fetch(`/api/profiles/`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    }, body: JSON.stringify({ username, password }),
                    });
                    if (response.ok) {
                        console.log('User logged in successfully');
                        navigate(`/profile/${response.data._id}`)
                    } else {
                        setLoginError('Invalid username or password.');
                    }
                    } catch (error) {
                    console.log('Error during login:', error.message);
                    setLoginError('An error occurred during login');

                // const user = await Profile.findOne({ userName: username, userPassword: password });
                // if (user) {console.log('User logged in successfully')
                // } else {setLoginError('Invalid username or password')}
                // } catch (error) {
                // console.log('Error during login:', error.message)
                // setLoginError('An error occurred during login')
              }
            }

  return (
    <div>
        <h3>Profile Login</h3>
        <hr />

        <form onSubmit={loginHandler}>
            <div>
                <Form.Label>Username</Form.Label>
                <Form.Control
                style={{
                    width:"250px", 
                    display:"inline-block", 
                    margin:"10px"}} 
                    type="text" 
                    id="inputUsername"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}/>
            </div>

            <div>
                <Form.Label>Password</Form.Label>
                <Form.Control
                style={{
                    width:"250px", 
                    display:"inline-block", 
                    margin:"10px"}} 
                    type="text" 
                    id="inputPassword"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
            </div>
            
            <Button type='submit' style={{margin:"20px"}} variant="outline-dark">Login</Button>
            <Link to={`/enter`}>
                <Button variant="outline-dark">Back to Entry</Button>
            </Link>
        </form>

        {loginError && <p style={{color:"red", fontSize:"10pt", margin:"-5px"}}>{loginError}</p>}
    </div>
  )
}

export default Login