import React, { useState, useEffect } from 'react'

const intitialLoginForm = {
  name: '',
  email: '',
  password: '',
}

export default function LogIn(props) {

  const [userLogin, setUserLogin] = useState([])

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
    <>
    </>
  )
}