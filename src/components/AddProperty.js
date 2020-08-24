import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFormValues = {
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

const AddProperty
 = (props) => {
    return (
      <form>
        <h1>Add Property/Listing</h1>
        <label>Street Address</label>
          <input
            type='text'
            name='streetAddress'
            id='streetAddress'
            // value={}
            // onChange={}
          />
  
        <label>City</label>
          <input
            type='text'
            name='city'
            id='city'
            // value={}
            // onChange={}
          />
  
        <label>State</label>
          <input
            type='dropdown'
            name='state'
            id='state'
            // value={}
            // onChange={}
          />
  
        <label>Zip Code</label>
          <input
            type='text'
            name='zip'
            id='zip'
            // value={}
            // onChange={}
          />
  
        <label>Property Type</label>
          <input
            type='dropdown'
            name='propertyType'
            id='propertyType'
            // value={}
            // onChange={}
          />
  
        <label>Number of Bedrooms</label>
          <input
            type='number'
            name='bedrooms'
            id='bedrooms'
            // value={}
            // onChange={}
          />
  
        <label>Number of Bathrooms</label>
          <input
            type='number'
            name='bathrooms'
            id='bathrooms'
            // value={}
            // onChange={}
          />
  
      <label>Number of Beds</label>
          <input
            type='number'
            name='beds'
            id='beds'
            // value={}
            // onChange={}
          />
  
      <label>Number of Guests Included</label>
          <input
            type='number'
            name='guestsIncluded'
            id='guestsIncluded'
            // value={}
            // onChange={}
          />
  
        <label>Accommodates</label>
          <input
            type='number'
            name='accommodates'
            id='accommodates'
            // value={}
            // onChange={}
          />
  
        <label>Min Nights</label>
          <input
            type='number'
            name='minNights'
            id='minNights'
            // value={}
            // onChange={}
          />
  
        <label>Max Nights</label>
          <input
            type='number'
            name='maxNights'
            id='maxNights'
            // value={}
            // onChange={}
          />
  
        <button>Save Changes</button>
        
      </form>
    )
  }
  
  export default AddProperty
