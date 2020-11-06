import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties,  addListing  } from '../store/actions/propertiesActions'
import PropertyCard from './PropertyCard'
import AddProperty from './AddProperty'
import OptimalPrice from './OptimalPrice'
import { axiosWithAuth } from '../utils/axiosWithAuth'


import { Button, Fade , Spinner, UncontrolledCollapse} from 'reactstrap'
import '../styles/AllProperties.css'
import { TweenMax } from 'gsap'



const AllProperties = (props) => {
  const [properties, setProperties] = useState([])
  //can toggle add property component
  const [toggle, setToggle] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  
  const allPropsH1 = useRef(null)

  useEffect(() => {
    TweenMax.to(
      allPropsH1.current, 3, {y: 20}, {y: -10},
    )
  }, [])
  //Ed's axios get request
  //useEffect hook here

  const getProperties = () => {
    axiosWithAuth().get('/api/properties')
      .then(res => {
        setProperties(res.data.properties)
        // console.log(res.data.properties)
      })
      .catch(err => {
        // console.log(err.message)
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
        <h1 ref={allPropsH1}>Welcome to your Property Dashboard</h1>
      </div>

      <div className='price-div'>
      <h2>Want to see how much a potential property could make?</h2>
      <h3>Try out the Optimal Price Calculator</h3>
      <Button className='price-btn' style={{ backgroundColor: '#406c47', fontSize: '1.8rem'}} id='toggler' > Optimal Price Calculator</Button>
      
      <UncontrolledCollapse toggler='#toggler'>
        <OptimalPrice />
       </UncontrolledCollapse>
      </div>
     

      <div className='all-properties-container'>
        <div className='listing-container'>
          {props.isLoading ? <div><p>Fetching Properties...</p><Spinner type="grow" color="success" style={{ width: '6rem', height: '6rem' }}/></div>: null}
          
          <h2>Your Properties</h2>
          <h3 className='property-sub'>View and make changes to your exisitng properties</h3>
          {properties.map((property, indx) => (
            <Link key={property.id} to={`/properties/${property.id}`}>
              <div className='card-img'></div>
              <PropertyCard property={property} />
              
            </Link>
          ))}
        </div>
        <div className='add-listing-container'>
          <h2>Have an additional property?</h2>
          {toggle ? null : <h3>Add a new property by filling out a simple form</h3>}
          <Button className='toggle-add' style={{ backgroundColor: '#406c47'}} onClick={handleAddToggle}>{toggle ? 'Close' : 'Open Form'}</Button>
          <Fade in={fadeIn}>
              <AddProperty addListing={addListing} setToggle={setToggle} toggle={toggle}/>
          </Fade>
         
        </div>
      </div>
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

export default connect(mapStateToProps, { fetchProperties, addListing })(AllProperties)