import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addListing } from '../store/actions/listingActions'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'

import { Button } from 'reactstrap'


const AllProperties = (props) => {
  //can toggle add property component
  const [toggle, setToggle] = useState(false)
  console.log(props)

  //Ed's axios get request
  //useEffect hook here

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <h1>All Properties</h1>
      {/* Ed map over properties to render a property card for each */}
      <Link to={'/properties/:id'}>
        <PropertyCard />
      </Link>

      <h2>Add Listing</h2>
      {toggle && <AddProperty addListing={addListing} />}
      <Button color='success' onClick={handleToggle}>{toggle ? 'Close' : 'Add Listing'}</Button>


    </div>
  )
}


export default connect(null, { addListing })(AllProperties)