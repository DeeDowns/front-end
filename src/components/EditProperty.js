import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { fetchProperties } from '../store/actions/propertiesActions'


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

  //get listing by id 
  //setEditInputs to the response data
  //
  


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
    <form onSubmit={saveEdits}>
      <h1>Edit Property/Listing</h1>
      <label>Street Address</label>
        <input
          type='text'
          name='streetAddress'
          id='streetAddress'
          value={editInputs.streetAddress}
          onChange={handleChange}
        />

      <label>City</label>
        <input
          type='text'
          name='city'
          id='city'
          value={editInputs.city}
          onChange={handleChange}
        />

      <label>State</label>
        <input
          type='dropdown'
          name='state'
          id='state'
          value={editInputs.state}
          onChange={handleChange}
        />

      <label>Zip Code</label>
        <input
          type='text'
          name='zip'
          id='zip'
          value={editInputs.zip}
          onChange={handleChange}
        />

      <label>Property Type</label>
        <input
          type='dropdown'
          name='propertyType'
          id='propertyType'
          value={editInputs.propertyType}
          onChange={handleChange}
        />

      <label>Number of Bedrooms</label>
        <input
          type='number'
          name='bedrooms'
          id='bedrooms'
          value={editInputs.bedrooms}
          onChange={handleChange}
        />

      <label>Number of Bathrooms</label>
        <input
          type='number'
          name='bathrooms'
          id='bathrooms'
          value={editInputs.bathrooms}
          onChange={handleChange}
        />

    <label>Number of Beds</label>
        <input
          type='number'
          name='beds'
          id='beds'
          value={editInputs.beds}
          onChange={handleChange}
        />

    <label>Number of Guests Included</label>
        <input
          type='number'
          name='guestsIncluded'
          id='guestsIncluded'
          value={editInputs.guestsIncluded}
          onChange={handleChange}
        />

      <label>Accommodates</label>
        <input
          type='number'
          name='accommodates'
          id='accommodates'
          value={editInputs.accommodates}
          onChange={handleChange}
        />

      <label>Min Nights</label>
        <input
          type='number'
          name='minNights'
          id='minNights'
          value={editInputs.minNights}
          onChange={handleChange}
        />

      <label>Max Nights</label>
        <input
          type='number'
          name='maxNights'
          id='maxNights'
          value={editInputs.maxNights}
          onChange={handleChange}
        />

      <button>Save Changes</button>
      
    </form>
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