import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as yup from 'yup'
import formSchema from '../validation/formSchema'



const intitialLoginForm = {
  email: '',
  password: '',
};

const intitialLoginFormErrors = {
  email: '',
  password: '',
};


export default function Login(props) {

  const [userLogin, setUserLogin] = useState(intitialLoginForm)
  const [formErrors, setFormErrors] = useState(intitialLoginFormErrors)


  //so we can redirect to register page
  let history = useHistory()

  //login event handler
  //the login goes on the onSubmit of the form
  //wont work as of now without endpoints
  const login = event => {
    event.preventDefault()
    //axiosWithAuth post request to get token from server
    axiosWithAuth().post('/api/auth/login', userLogin)
      .then(res => {
        console.log(res)

        //send token to local storage
        // localStorage.setItem('token', res.data.payload)

        //redirect to register page
        // history.push('/properties')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setUserLogin({
      ...userLogin,
      [name]: value
    })
  };

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form onSubmit={login}>
      <div>
        <h2>Login</h2>
      </div>

      <div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
      </div>

      <div>
        <label>Email:&nbsp;
          <input
            type='email'
            name='email'
            value={userLogin.email}
            placeholder='email'
            onChange={onInputChange}
          />
        </label>

        <label>Password:&nbsp;
          <input
            type='password'
            name='password'
            value={userLogin.password}
            placeholder='password'
            onChange={onInputChange}
          />
        </label>

      </div>
      <button>Login</button>
    </form>
  )
}