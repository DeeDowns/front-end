import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { fetchProperties } from '../store/actions/propertiesActions'

import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap'
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
      
      <h1>Edit Your Property</h1>
      <Row form>
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
        </Row>

      {/* <FormGroup>
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
      </FormGroup>  */}
      <div className='edit-btn-group'>
        <Button className='save-btn' style={{ backgroundColor: '#406c47'}}>Save Changes</Button>
        <Button className='cancel-btn' style={{ backgroundColor: '#406c47'}} onClick={() => history.push(`/properties/${id}`)}>Cancel</Button>
      </div>

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