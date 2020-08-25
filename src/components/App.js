import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperty } from '../store/actions/propertiesActions'
import Home from './Home'
import AllProperties from './AllProperties'
import EditProperty from './EditProperty'
import Property from './Property'
import Login from './Login'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import AddProperty from './AddProperty';



function App(props) {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    axios.get('')
      .then(res => {
        console.log(res)
        // setProperties()
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(props)


  useEffect(() => {
    getProperties()
  }, [])


  return (
    <div className="propertiesContainer">
      <nav>
        <h1>Airbnb Clone</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/properties'>Properties</Link>
          <Link to='/register'>Register</Link>

        </div>
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

      {/* <PrivateRoute exact path='/add-property/:id'>
        <AddProperty />
      </PrivateRoute> */}

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

export default connect(mapStateToProps, { fetchProperty })(App);
