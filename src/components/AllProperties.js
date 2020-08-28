import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties,  addListing  } from '../store/actions/propertiesActions'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'
import OptimalPrice from './OptimalPrice'


import { Button, Fade , Spinner, UncontrolledCollapse} from 'reactstrap'
import '../styles/AllProperties.css'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const AllProperties = (props) => {
  const [properties, setProperties] = useState([])
  //can toggle add property component
  const [toggle, setToggle] = useState(false)
  const [togglePrice, setTogglePrice] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  
  // const toggleFade = setFadeIn(!fadeIn)
  const history = useHistory()

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

  const handleAddToggle = () => {
    setToggle(!toggle)
    setFadeIn(!fadeIn)
  }

  return (
    <div className='main-container'>
      <div className='img-container'>
        <h1>Welcome!</h1>
      </div>

      <div className='price-div'>
      <Button className='price-btn' color='success' id='toggler' > Optimal Price Calculator</Button>
      <UncontrolledCollapse toggler='#toggler'>
        <OptimalPrice />
       </UncontrolledCollapse>
      </div>
     

      <div className='all-properties-container'>
        <div className='listing-container'>
          {props.isLoading ? <h3>Fetching Properties...<Spinner type="grow" color="success" style={{ width: '6rem', height: '6rem' }}/></h3> : null}
          
          <h2>Your Properties</h2>
          {properties.map((property, indx) => (
            <Link key={property.id} to={`/properties/${property.id}`}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
        <div className='add-listing-container'>
          <h2>Have an additional property?</h2>
          <Button className='toggle-add' color='success' onClick={handleAddToggle}>{toggle ? 'Close' : 'Open Form'}</Button>
          <Fade in={fadeIn}>
              <AddProperty addListing={addListing} setToggle={setToggle} toggle={toggle}/>
          </Fade>
         
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    properties: state.propertiesReducer.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties, addListing })(AllProperties)