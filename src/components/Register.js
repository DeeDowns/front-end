import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const intitialRegisterForm = {
  name: '',
  email: '',
  password: '',

};

const intitialRegisterFormErrors = {
  name: '',
  email: '',
  password: '',
 
};


const Register = (props) => {
  const [userRegister, setUserRegister] = useState(intitialRegisterForm)
  const [formErrors, setFormErrors] = useState(intitialRegisterFormErrors)
  
  let history = useHistory()

  const handleChange = event => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value
    })
  }
  const register = event => {
    event.preventDefault()
    axiosWithAuth().post('/api/auth/login', userRegister)
    .then(res => {
      console.log(res)

      //localStorage.setItem('token', res.data.payload)
      // history.push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={register}>
      <div>
        <h2>Register</h2>
      </div>

      <div>
        <label>Name:&nbsp;
        <input
            type='text'
            name='name'
            value={userRegister.name}
            placeholder='name'
            onChange={handleChange}
          />
        </label>

        <label>Email:&nbsp;
        <input
            type='email'
            name='email'
            value={userRegister.email}
            placeholder='email'
            onChange={handleChange}
          />
        </label>

        <label>Password:&nbsp;
        <input
            type='password'
            name='password'
            value={userRegister.password}
            placeholder='password'
            onChange={handleChange}
          />
        </label>
      </div>
      <button>Sign Up</button>
    </form>

    
  )
}

export default Register