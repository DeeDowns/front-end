import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../store/actions/propertiesActions'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'


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
      {toggle && <AddProperty />}
      <button onClick={handleToggle}>{toggle ? 'Close' : 'Add Listing'}</button>


    </div>
  )
}

// const mapStateToProps = state => {

//   return {
//     properties: state.propertiesReducer.properties,
//     isLoading: state.propertiesReducer.isLoading,
//     error: state.propertiesReducer.error
//   }
// }


export default AllProperties

// export default connect(mapStateToProps, { fetchProperties })(AllProperties)