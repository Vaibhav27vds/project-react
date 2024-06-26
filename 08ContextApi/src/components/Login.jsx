import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        value={username} 
        name="username" 
        placeholder='Username' 
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        type="text" 
        value={password}
        name="password" 
        placeholder='Password' 
        onChange={(e) => setPassword(e.target.value)}
         />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login