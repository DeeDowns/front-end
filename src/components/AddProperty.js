import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

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


  const handleChanges = event => {
    setAddInputs({
      ...addInputs,
      [event.target.name]: event.target.value
    })
  }

    return (
      <form>
        <h1>Add Property/Listing</h1>
        <label>Street Address</label>
          <input
            type='text'
            name='streetAddress'
            id='streetAddress'
            value={addInputs.streetAddress}
            onChange={handleChanges}
          />
  
        <label>City</label>
          <input
            type='text'
            name='city'
            id='city'
            value={addInputs.city}
            onChange={handleChanges}
          />
  
          <label>State</label>
          <select 
            name='state' 
            id='state'
            value={addInputs.state} 
            onChange={handleChanges}
          >
            <option value={addInputs.state}>Alabama</option>
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
          </select>
  
        <label>Zip Code</label>
          <input
            type='text'
            name='zip'
            id='zip'
            value={addInputs.zip}
            onChange={handleChanges}
          />
  
        <label>Property Type</label>
          <select 
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
          </select>
          
  
        <label>Number of Bedrooms</label>
          <input
            type='number'
            name='bedrooms'
            id='bedrooms'
            value={addInputs.bedrooms}
            onChange={handleChanges}
          />
  
        <label>Number of Bathrooms</label>
          <input
            type='number'
            name='bathrooms'
            id='bathrooms'
            value={addInputs.bathrooms}
            onChange={handleChanges}
          />
  
      <label>Number of Beds</label>
          <input
            type='number'
            name='beds'
            id='beds'
            value={addInputs.beds}
            onChange={handleChanges}
          />
  
      <label>Number of Guests Included</label>
          <input
            type='number'
            name='guestsIncluded'
            id='guestsIncluded'
            value={addInputs.guestsIncluded}
            onChange={handleChanges}
          />
  
        <label>Accommodates</label>
          <input
            type='number'
            name='accommodates'
            id='accommodates'
            value={addInputs.accommodates}
            onChange={handleChanges}
          />
  
        <label>Min Nights</label>
          <input
            type='number'
            name='minNights'
            id='minNights'
            value={addInputs.minNights}
            onChange={handleChanges}
          />
  
        <label>Max Nights</label>
          <input
            type='number'
            name='maxNights'
            id='maxNights'
            value={addInputs.maxNights}
            onChange={handleChanges}
          />
  
        <button>Save Changes</button>
        
      </form>
    )
  }
  
  export default AddProperty
