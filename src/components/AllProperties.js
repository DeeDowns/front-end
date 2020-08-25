import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'


export default function AllProperties(props) {
  //can toggle add property component
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <h1>All Properties</h1>
      <Link to={'/properties/:id'}>
        <PropertyCard />
      </Link>

      <h2>Add Listing</h2>
      {toggle && <AddProperty />}
      <button onClick={handleToggle}>{toggle ? 'Close' : 'Add Listing'}</button>


    </div>
  )
}