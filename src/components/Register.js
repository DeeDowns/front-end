import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as yup from 'yup'
import { Button, Label, FormGroup, Input, Form, FormText } from 'reactstrap'
import '../styles/Register.css'
import formSchema from '../validation/formSchema'
import { TweenMax } from 'gsap'


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

  const regHrTop = useRef(null)
  const regHrBottom = useRef(null)

  useEffect(() => {
    TweenMax.to(
      regHrTop.current, 3, {y: 40}, {y: -40},
    )
    TweenMax.to(
      regHrBottom.current,  3, {y: -40}, {y: 40}
    )
  }, [])

  const register = event => {
    event.preventDefault()
    axiosWithAuth().post('/api/auth/register', userRegister)
      .then(res => {
        // console.log(res.data)

        localStorage.setItem('token', res.data.password)
        history.push('/login')
      })
      .catch(err => {
        // console.log(err.message, err.name)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
  }

  const handleChange = event => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value
    })
    inputChange(event.target.name, event.target.value)
  }
  return (
      <div className='form-container'>

        <hr className='top' ref={regHrTop}/>

        <Form className='register-form' onSubmit={register}>
          <div>
            <FormText className='errorText'>{formErrors.name}</FormText>
            <FormText className='errorText'>{formErrors.email}</FormText>
            <FormText className='errorText'>{formErrors.password}</FormText>
          </div>
          <FormGroup>
            <Label>Name:&nbsp;
              <Input
                type='text'
                name='name'
                value={userRegister.name}
                placeholder='Type your name'
                onChange={handleChange}
              />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label>Email:&nbsp;
              <Input
                type='email'
                name='email'
                value={userRegister.email}
                placeholder='Type your email'
                onChange={handleChange}
              />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label>Password:&nbsp;
              <Input
                type='password'
                name='password'
                value={userRegister.password}
                placeholder='Type your password'
                onChange={handleChange}
              />
            </Label>
          </FormGroup>

      
        <Button style={{ backgroundColor: '#406c47'}}>Sign Up</Button>
      </Form>

      <hr className='bottom' ref={regHrBottom}/>

    </div>


  )
}

export default Register