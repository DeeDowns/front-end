import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Button, Label, FormGroup, Input, Form } from 'reactstrap'
import '../styles/Register.css'


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
    axiosWithAuth().post('/api/auth/register', userRegister)
      .then(res => {
        console.log(res.data)

        localStorage.setItem('token', res.data.password)
        history.push('/login')
      })
      .catch(err => {
        console.log(err.message, err.name)
      })
  }
  return (
      <Form className='register-form' onSubmit={register}>
        <h2>Register</h2>
        <FormGroup>
          <Label>Name:&nbsp;
            <Input
              type='text'
              name='name'
              value={userRegister.name}
              placeholder='name'
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
              placeholder='email'
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
              placeholder='password'
              onChange={handleChange}
            />
          </Label>
        </FormGroup>

    
      <Button color='success'>Sign Up</Button>
    </Form>


  )
}

export default Register