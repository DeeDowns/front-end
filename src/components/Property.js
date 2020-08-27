import React, { useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, fetchPropertyById } from '../store/actions/propertiesActions'

import { Button } from 'reactstrap'
import '../styles/Property.css'




const Property = (props) => {
  console.log('PROPERTY', props)
  const [propertyData, setPropertyData] = useState({})
  const { id } = useParams()
  let history = useHistory()

  useEffect(() => {
    props.fetchPropertyById(id)
  }, [id])

  console.log(props)
  

   const handleDelete = event => {
     event.preventDefault()
     history.push('/properties')
     axiosWithAuth().delete(`/api/properties/${id}`)
     .then(res => {
       console.log(res)

       //history.push('/properties')
     })
     .catch(err => {
       console.log(err)
     })

   }

  return (
    <div className='main-container'>
      {props.isLoading ? <h3>Fetching Properties...</h3> : null}
      {props.property && <>
      <div className='img-container'>
        <h1>{props.property.street_address}</h1>
      </div>
      <h2>{props.property.property_type} located in {props.property.city}, {propertyData.zip}</h2>
      <h3>Bedrooms: {props.property.bedrooms}</h3>
      <h3>Bathrroms: {props.property.bathrooms}</h3>
      <h3>Leasable Area: {props.property.leaseable_area}</h3>
      <h3>Parking for {props.property.parking} vehicles</h3>
      <div className='button-container'>
        <Button className='edit-btn' color='success' onClick={() => history.push(`/edit-property/:id`)}>Edit Listing</Button>
        <Button className='delete-btn' color='success' onClick={handleDelete}>Remove Listing</Button>
        <Button className='back-btn' color='success' onClick={() => history.push('/properties')}>Back</Button>
      </div>
      </>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.propertiesReducer.properties,
    property: state.propertiesReducer.property.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties, fetchPropertyById })(Property)