import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { fetchProperties } from '../store/actions/propertiesActions'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles/EditProperty.css'


const initialEditInputs = {
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  propertyType: '',
  bedrooms: '',
  bed: '',
  bathrooms: '',
  guestsIncluded: '',
  accommodates: '',
  minNights: '',
  maxNights: ''
}

const EditProperty = (props) => {
  const [editInputs, setEditInputs] = useState(initialEditInputs)
  const { id } = useParams()
  console.log(props)
  

  const handleChange = event => {
    setEditInputs({
      ...editInputs, 
      [event.target.name]: event.target.value
    })
  }

  //useEffect, dependency aray [id]
  ///get property by id
  //setEditInputs to res data
  


  const saveEdits = event => {
    event.preventDefault()
    axiosWithAuth().put(`api/edit/${id}`, editInputs)
    .then(res => {
      console.log(res)
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
          name='streetAddress'
          id='streetAddress'
          value={editInputs.streetAddress}
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
      <Label>Property Type</Label>
        <Input
          type='select'
          name='propertyType'
          id='propertyType'
          value={editInputs.propertyType}
          onChange={handleChange}
        >
            <option>House </option>
            <option>Townhouse </option>
            <option>Apartment </option>
            <option>Condominium </option>
            <option>Room </option>
            <option>Other </option>
        </Input>
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
          name='guestsIncluded'
          id='guestsIncluded'
          value={editInputs.guestsIncluded}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Accommodates</Label>
        <Input
          type='number'
          name='accommodates'
          id='accommodates'
          value={editInputs.accommodates}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Min Nights</Label>
        <Input
          type='number'
          name='minNights'
          id='minNights'
          value={editInputs.minNights}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Max Nights</Label>
        <Input
          type='number'
          name='maxNights'
          id='maxNights'
          value={editInputs.maxNights}
          onChange={handleChange}
        />
        </FormGroup>
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

export default connect(mapStateToProps, { fetchProperties})(EditProperty)