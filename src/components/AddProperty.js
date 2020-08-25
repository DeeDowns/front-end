import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { addListing } from '../store/actions/listingActions'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


const initialAddInputs = {
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  propertyType: '',
  bedrooms: '',
  beds: '',
  bathrooms: '',
  guestsIncluded: '',
  accommodates: '',
  minNights: '',
  maxNights: ''
}

const AddProperty = (props) => {
  const [addInputs, setAddInputs] = useState(initialAddInputs)
  const history = useHistory()
  console.log(props)

  const handleChanges = event => {
    setAddInputs({
      ...addInputs,
      [event.target.name]: event.target.value
    })
  }


  const submit = event => {
    event.preventDefault()
    //props.addListing(addInputs)
    //setAddInputs(initalAddInputs)
    //history.pushState('/properties')

  }

  return (
    <Form>
      <h1>Add Property/Listing</h1>
      <FormGroup>
        <Label>Street Address</Label>
        <Input
          type='text'
          name='streetAddress'
          id='streetAddress'
          value={addInputs.streetAddress}
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
        <Label>Property Type</Label>
        <Input
          type='select'
          name='propertyType'
          id='propertyType'
          value={addInputs.propertyType}
          onChange={handleChanges}
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
          name='guestsIncluded'
          id='guestsIncluded'
          value={addInputs.guestsIncluded}
          onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label>Accommodates</Label>
        <Input
          type='number'
          name='accommodates'
          id='accommodates'
          value={addInputs.accommodates}
          onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label>Min Nights</Label>
        <Input
          type='number'
          name='minNights'
          id='minNights'
          value={addInputs.minNights}
          onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label>Max Nights</Label>
        <Input
          type='number'
          name='maxNights'
          id='maxNights'
          value={addInputs.maxNights}
          onChange={handleChanges}
        />
      </FormGroup>
      <Button color='success'>Add Listing</Button>

    </Form>
  )
}

export default AddProperty
