import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as yup from 'yup'
import formSchema from '../validation/formSchema'
import { Button, Form, Label, FormGroup, Input, FormText } from 'reactstrap'
import { TweenMax } from 'gsap'

import '../styles/Login.css'

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
  const [user, setUser] = useState('')
  
  const loginHrTop = useRef(null)
  const loginHrBottom = useRef(null)

  useEffect(() => {
    TweenMax.to(
      loginHrTop.current, 3, {y: 40}, {y: -40},
    )
    TweenMax.to(
      loginHrBottom.current,  3, {y: -40}, {y: 40}
    )
  }, [])

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
        // console.log(res)

        //send token to local storage
        localStorage.setItem('token', res.data.token)
        setUser(res.data.message)

        //redirect to register page
        history.push('/properties')
      })
      .catch(err => {
        // console.log(err)
      })
  }

  // console.log(user)

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
    <div className='form-container'>

      <hr className='top' ref={loginHrTop}/>


      <Form className='login-form' onSubmit={login}>
        <div>
          <FormText className='errorText'>{formErrors.email}</FormText>
          <FormText className='errorText'>{formErrors.password}</FormText>
        </div>

        <FormGroup>
          <Label>Email:&nbsp;
            <Input
              type='email'
              name='email'
              value={userLogin.email}
              placeholder='Type your email'
              onChange={onInputChange}
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Password:&nbsp;
            <Input
              type='password'
              name='password'
              value={userLogin.password}
              placeholder='Type your password'
              onChange={onInputChange}
            />
          </Label>
        </FormGroup>
        <Button style={{ backgroundColor: '#406c47'}}>Login</Button>
      </Form>

      <hr className='bottom' ref={loginHrBottom}/>

    </div>
  )
}