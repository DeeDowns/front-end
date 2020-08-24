import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Login(props) {

  //so we can redirect to register page
  let history = useHistory()

  //login event handler
  //the login goes on the onSubmit of the form
  //wont work as of now without endpoints
  const login = event => {
    event.preventDefault()
    //axiosWithAuth post request to get token from server
    axiosWithAuth().post(/*'endpoint goes here', login credentials to send*/)
    .then(res => {
      console.log(res)
      
      //send token to local storage
      // localStorage.setItem('token', res.data.payload)

      //redirect to register page
      //history.push(route to register '/register')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    </>
  )
}

