import React, { useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../store/actions/propertiesActions'





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
      <button onClick={() => history.push(`/edit-property/:id`)}>Edit Listing</button>
      <button onClick={handleDelete}>Remove Listing</button>
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