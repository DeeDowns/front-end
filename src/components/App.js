import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, fetchPropertyById, addListing} from '../store/actions/propertiesActions'
import { getOptimalPrice } from '../store/actions/optimalPriceActions'
import Home from './Home'
import AllProperties from './AllProperties'
import EditProperty from './EditProperty'
import Property from './Property'
import Login from './Login'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import OptimalPrice from './OptimalPrice'

import '../styles/App.css'

function App(props) {
  console.log('APP', props)

  useEffect(() => {
    props.fetchProperties()
  }, [])

  return (
    <div className="propertiesContainer">
      <header>
        <Link to='/' className='img-link'>
          <img src={require('../assests/BW-AirPrice.gif')} alt='logo'/>
        </Link>
        <nav>
          {/* <a href='https://agitated-morse-a55b40.netlify.app'>Home</a> */}
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/properties'>Dashboard</Link>
        </nav>
      </header>
      

      <Route exact path='/register'>
        <Register />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>

      <PrivateRoute exact path='/edit-property/:id'>
        <EditProperty fetchProperties={props.fetchProperties} properties={props.properties} />
      </PrivateRoute>

      <PrivateRoute exact path='/properties/:id'>
        <Property properties={props.properties} property={props.property} />
      </PrivateRoute>

      <PrivateRoute exact path='/properties'>
        <AllProperties />
      </PrivateRoute>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/optimal-price'>
        <OptimalPrice />
      </Route>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    properties: state.propertiesReducer.properties,
    property: state.propertiesReducer.property,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error,
    optimalPrice: state.optimalPriceReducer.predictedPrice,
    // isLoading: state.optimalPriceReducer.isLoading,
    // error: state.optimalPriceReducer.error,
  }
}

export default connect(mapStateToProps, { fetchProperties, addListing, fetchPropertyById, getOptimalPrice })(App);
