import React, { useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../store/actions/propertiesActions'

import { Button } from 'reactstrap'




const Property = (props) => {
  const { id } = useParams()
  let history = useHistory()
  
  //get property by id
  //

   const handleDelete = event => {
     event.preventDefault()
     history.push('/properties')

   }

  return (
    <div>
      <Button color='success' onClick={() => history.push(`/edit-property/:id`)}>Edit Listing</Button>
      <Button color='success' onClick={handleDelete}>Remove Listing</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.propertiesReducer.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties })(Property)