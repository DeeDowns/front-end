import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addListing } from '../store/actions/listingActions'
import { fetchProperties } from '../store/actions/propertiesActions'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'

import { Button } from 'reactstrap'
import '../styles/AllProperties.css'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const AllProperties = (props) => {
  const [properties, setProperties] = useState([])
  //can toggle add property component
  const [toggle, setToggle] = useState(false)
  console.log(props)

  //Ed's axios get request
  //useEffect hook here

  const getProperties = () => {
    axiosWithAuth().get('/api/properties')
      .then(res => {
        setProperties(res.data.properties)
        console.log(res.data.properties)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProperties();
  }, [])

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className='main-container'>
      <div className='img-container'>
        <h1>All Properties</h1>
      </div>
      <div className='all-properties-container'>

        {/* Ed map over properties to render a property card for each */}

        {properties.map((property, indx) => (
          <div className='listing-container'>
            <Link key={property.id} to={`/properties/${property.id}`}>
              <PropertyCard property={property}/>
            </Link>
          </div>
        ))}

        <div className='add-listing-container'>
          <h2>Add Listing</h2>
          {toggle && <AddProperty addListing={addListing} />}
          <Button className='toggle-add' color='success' onClick={handleToggle}>{toggle ? 'Close' : 'Add Listing'}</Button>
        </div>
      </div>
    </div>
  )
}
// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     properties: state.propertiesReducer.properties,
//     isLoading: state.propertiesReducer.isLoading,
//     error: state.propertiesReducer.error
//   }
// }

export default connect(null, { fetchProperties, addListing })(AllProperties)