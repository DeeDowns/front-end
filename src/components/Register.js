import React, { useState, useEffect } from 'react'
import axios from 'axios'



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


export default function Register(props) {

  const [userRegister, setUserRegister] = useState(intitialRegisterForm)
  const [formErrors, setFormErrors] = useState(intitialRegisterFormErrors)

  const getUser = () => {
    axios.get('')
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postUser = () => {
    axios.post('')
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {

      })
  }

  return (
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
  )
}