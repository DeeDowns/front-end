import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { addListing, fetchProperties } from  '../store/actions/propertiesActions'
// import { fetchProperty } from '../store/actions/propertiesActions'

import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import '../styles/AddProperty.css'

const initialAddInputs = {
  street_address: '',
  city: '',
  zip: '',
  bedrooms: '',
  beds: '',
  bathrooms: '',
  guests_included: '',
  accomodates: '',
  minumum_nights: '',
  maximum_nights: '',
  // id: new Date(),
  // parking: '',
  // leaseableArea: ''
   // state: '',
   // property_type: '',
  
}

const AddProperty = (props) => {
  const [addInputs, setAddInputs] = useState(initialAddInputs)
  // const [toggle, setToggle] = useState(false)
  const history = useHistory()
  console.log('ADD', props)
  
 

  const handleChanges = event => {
    setAddInputs({
      ...addInputs,
      [event.target.name]: event.target.value
    })
  }

  const submit = event => {
    event.preventDefault()
    props.addListing(addInputs)
    console.log(addInputs)

    setAddInputs(initialAddInputs)
    props.setToggle(false)
    history.push('/properties')
  }

  console.log(props.properties)

  return (
    <Form className='add-form' onSubmit={submit}>
      <h2>Complete form to add new property</h2>
      <Row form>
      <FormGroup width='80%'>
        <Label>Street Address</Label>
        <Input
          type='text'
          name='street_address'
          id='street_address'
          value={addInputs.street_address}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>City</Label>
        <Input
          type='text'
          name='city'
          id='city'
          value={addInputs.city}
          onChange={handleChanges}
        />
      </FormGroup>
  
      <FormGroup>
        <Label>Zip Code</Label>
        <Input
          type='text'
          name='zip'
          id='zip'
          value={addInputs.zip}
          onChange={handleChanges}
        />
      </FormGroup>
     
      <FormGroup>
        <Label>Number of Bedrooms</Label>
        <Input
          type='number'
          name='bedrooms'
          id='bedrooms'
          value={addInputs.bedrooms}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Number of Bathrooms</Label>
        <Input
          type='number'
          name='bathrooms'
          id='bathrooms'
          value={addInputs.bathrooms}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Number of Beds</Label>
        <Input
          type='number'
          name='beds'
          id='beds'
          value={addInputs.beds}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Number of Guests Included</Label>
        <Input
          type='number'
          name='guests_included'
          id='guests_included'
          value={addInputs.guests_included}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Accommodates</Label>
        <Input
          type='number'
          name='accomodates'
          id='accomodates'
          value={addInputs.accomodates}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Min Nights</Label>
        <Input
          type='number'
          name='minumum_nights'
          id='minumum_nights'
          value={addInputs.minumum_nights}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label>Max Nights</Label>
        <Input
          type='number'
          name='maximum_nights'
          id='maximum_nights'
          value={addInputs.maximum_nights}
          onChange={handleChanges}
        />
      </FormGroup>

      {/* <FormGroup>
        <Label>Leaseable Area</Label>
        <Input
          type='text'
          name='leaseableArea'
          id='leaseableArea'
          value={addInputs.leaseableArea}
          onChange={handleChanges}
        />
      </FormGroup>
     <FormGroup>
        <Label>Parking</Label>
        <Input
          type='text'
          name='parking'
          id='parking'
          value={addInputs.parking}
          onChange={handleChanges}
        />
      </FormGroup>
          
     <FormGroup>
        <Label>Property Type</Label>
        <Input
          type='select'
          name='property_type'
          id='property_type'
          value={addInputs.property_type}
          onChange={handleChanges}
        >
          <option>Single Family Home </option>
          <option>Townhome </option>
          <option>Apartment </option>
          <option>Condominium </option>
          <option>Room </option>
          <option>Other </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>State</Label>
        <Input
          type='select'
          name='state'
          id='state'
          value={addInputs.state}
          onChange={handleChanges}
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
      </FormGroup> */}
      </Row>
      <Button className='add-btn' color='success'>Add</Button>
      
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.propertiesReducer.properties,
    property: state.propertiesReducer.property,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { addListing, fetchProperties })(AddProperty)
