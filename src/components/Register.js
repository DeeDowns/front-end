import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


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

const intitialRegisterFormErrors = {
  street_address: '',
  city: '',
  zip: '',
  property_type: '',
  leasable_area: '',
  parking: '',
  // upgrades: '',
  // special_remarks: ''
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
      <button>test</button>
    </>
  ) 
  }

  export default Register
   
