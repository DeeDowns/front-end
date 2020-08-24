import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Register(props) {
  let history = useHistory


  const register = event => {
    event.preventDefault()
    axiosWithAuth().post('/api/auth/register')
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
      <button onClick={register}>test</button>
    </>
  )
}