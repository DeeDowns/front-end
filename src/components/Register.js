import React, { useState, useEffect } from 'react'

const intitialRegisterForm = {
  street_address: '',
  city: '',
  zip: '',
  property_type: '',
  leasable_area: '',
  parking: '',
  upgrades: '',
  special_remarks: ''
};


export default function Register(props) {

  const [userRegister, setUserRegister] = useState([])

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