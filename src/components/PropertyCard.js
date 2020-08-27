import React from 'react'
import '../styles/PropertyCard.css'

export default function PropertyCard(props) {

  const { property, id } = props;
  console.log(property, id)



  return (
    <div className='property-card-container'>
      <h3>{property.street_address}</h3>
      <p>click for more info</p>
    </div>
  )
}