import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { fetchProperties, fetchPropertyById } from '../store/actions/propertiesActions'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles/EditProperty.css'


const initialEditInputs = {
  street_address: '',
  city: '',
  zip: '',
  property_type: '',
  bedrooms: '',
  beds: '',
  bathrooms: '',
  guests_included: '',
  accomodates: '',
  minumum_nights: '',
  maximum_nights: '',
  // parking: '',
  // leaseableArea: ''
   // state: ''
}

const EditProperty = (props) => {
  const [editInputs, setEditInputs] = useState(initialEditInputs)
  const { id } = useParams()
  let history = useHistory()
  console.log(props)
  

  const handleChange = event => {
    setEditInputs({
      ...editInputs, 
      [event.target.name]: event.target.value
    })
  }


  useEffect(() => {
    axiosWithAuth().get(`/api/properties/${id}`)
      .then(res => {
        console.log(res.data.properties)
        setEditInputs(res.data.properties)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])



  const saveEdits = event => {
    event.preventDefault()
    axiosWithAuth().put(`api/properties/${id}`, editInputs)
    .then(res => {
      // console.log(res)
      history.push(`/properties/${id}`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Form className='edit-form' onSubmit={saveEdits}>
      
      <h1>Edit Property/Listing</h1>
      <FormGroup>
        <Label>Street Address</Label>
          <Input
            type='text'
            name='street_address'
            id='street_address'
            value={editInputs.street_address}
            onChange={handleChange}
          />
      </FormGroup>

      <FormGroup>
        <Label>City</Label>
          <Input
            type='text'
            name='city'
            id='city'
            value={editInputs.city}
            onChange={handleChange}
          />
      </FormGroup>
     
      <FormGroup>
        <Label>Zip Code</Label>
          <Input
            type='text'
            name='zip'
            id='zip'
            value={editInputs.zip}
            onChange={handleChange}
          />
      </FormGroup>
     
      <FormGroup>
        <Label>Number of Bedrooms</Label>
          <Input
            type='number'
            name='bedrooms'
            id='bedrooms'
            value={editInputs.bedrooms}
            onChange={handleChange}
          />
      </FormGroup>

        <FormGroup>
          <Label>Number of Bathrooms</Label>
            <Input
              type='number'
              name='bathrooms'
              id='bathrooms'
              value={editInputs.bathrooms}
              onChange={handleChange}
            />
      </FormGroup>

      <FormGroup>
        <Label>Number of Beds</Label>
            <Input
              type='number'
              name='beds'
              id='beds'
              value={editInputs.beds}
              onChange={handleChange}
            />
      </FormGroup>

      <FormGroup>
        <Label>Number of Guests Included</Label>
            <Input
              type='number'
              name='guests_included'
              id='guests_included'
              value={editInputs.guests_included}
              onChange={handleChange}
            />
      </FormGroup>

      <FormGroup>
        <Label>Accomodates</Label>
          <Input
            type='number'
            name='accomodates'
            id='accomodates'
            value={editInputs.accomodates}
            onChange={handleChange}
          />
      </FormGroup>

      <FormGroup>
        <Label>Min Nights</Label>
          <Input
            type='number'
            name='minumum_nights'
            id='minumum_nights'
            value={editInputs.minumum_nights}
            onChange={handleChange}
          />
      </FormGroup>

      <FormGroup>
        <Label>Max Nights</Label>
          <Input
            type='number'
            name='maximum_nights'
            id='maximum_nights'
            value={editInputs.maximum_nights}
            onChange={handleChange}
          />
        </FormGroup>

         {/*<FormGroup>
       <Label>State</Label>
        <Input
          type='select'
          name='state'
          id='state'
          value={editInputs.state}
          onChange={handleChange}
        >
            <option value='AL'>Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label>Property Type</Label>
        <Input
          type='select'
          name='property_type'
          id='property_type'
          value={editInputs.property_type}
          onChange={handleChange}
        >
            <option>Single Family Home </option>
            <option>Townhouse </option>
            <option>Apartment </option>
            <option>Condominium </option>
            <option>Room </option>
            <option>Other </option>
        </Input>
      </FormGroup> */}

      <Button className='save-btn' color='success'>Save Changes</Button>

    </Form>
  )
}

const mapStateToProps = state => {

  return {
    properties: state.propertiesReducer.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties })(EditProperty)