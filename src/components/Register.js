import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const intitialRegisterForm = {
  name: '',
  email: '',
  password: '',

};

const intitialRegisterFormErrors = {
  street_address: '',
  city: '',
  zip: '',
 
};


const Register = (props) => {
  const [userRegister, setUserRegister] = useState(intitialRegisterForm)
  const [formErrors, setFormErrors] = useState(intitialRegisterFormErrors)
  
  let history = useHistory()

  const register = event => {
    event.preventDefault()
    axiosWithAuth().post('/api/auth/register', userRegister)
    .then(res => {
      console.log(res)
      history.push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <form>
        <div>
          <h2>Register</h2>
        </div>

        <div>
          <label>Name:&nbsp;
          <input
              type='text'
              name='name'
              // value={}
              placeholder='name'
            // onChange={}
            />
          </label>

          <label>Email:&nbsp;
          <input
              type='email'
              name='email'
              // value={}
              placeholder='email'
            // onChange={}
            />
          </label>

          <label>Password:&nbsp;
          <input
              type='password'
              name='password'
              // value={}
              placeholder='password'
            // onChange={}
            />
          </label>
        </div>
      </form>
      <button>test</button>
    </>
  )
}

export default Register