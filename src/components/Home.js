import React from 'react'
import '../styles/Home.css'
export default function Home(props) {
  return (
   <div className='home-container'>
     <div className='welcome-container'>
       <h1>Manage and price your properties with AirPrice!</h1>
       <h2>AirPrice is a data-driven application designed to predict optimal pricing of properties based on common Airbnb listing variables such as number of bedrooms, bathrooms, beds, and other amenities.</h2>
      </div>
   </div>
  )
}