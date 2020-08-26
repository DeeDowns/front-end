import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../store/actions/propertiesActions'
import { addListing } from '../store/actions/listingActions'
import Home from './Home'
import AllProperties from './AllProperties'
import EditProperty from './EditProperty'
import Property from './Property'
import Login from './Login'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import AddProperty from './AddProperty';

import '../styles/App.css'



function App(props) {
  console.log(props)

  //Move to AllProperties Component
  // const [properties, setProperties] = useState([]);

  // const getProperties = () => {
  //   axios.get('')
  //     .then(res => {
  //       console.log(res)
  //       // setProperties()
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   getProperties()
  // }, [])



  return (
    <div className="propertiesContainer">
      <nav>
        <h1>Airbnb Clone</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/properties'>Properties</Link>
      </nav>

      <Route exact path='/register'>
        <Register />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>

      <PrivateRoute exact path='/edit-property/:id'>
        <EditProperty />
      </PrivateRoute>

      <PrivateRoute exact path='/properties/:id'>
        <Property />
      </PrivateRoute>

      <PrivateRoute exact path='/properties'>
        <AllProperties />
      </PrivateRoute>

      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    properties: state.propertiesReducer.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties, addListing })(App);
