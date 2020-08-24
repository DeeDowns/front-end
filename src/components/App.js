import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import AllProperties from './All_Properties'
import EditProperty from './Register'
import Property from './Property'
import Login from './Login'
import Register from './Register'



function App() {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    axios.get('')
      .then(res => {
        setProperties()
      })
      .catch(err => {
        console.log(err)
      })
  }


  // useEffect(() => {
  //   getProperties
  // }, [])


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

      <Route exact path='/edit-property/:id'>
        <EditProperty />
      </Route>

      <Route exact path='/properties/:id'>
        <Property />
      </Route>

      <Route exact path='/properties'>
        <AllProperties />
      </Route>

      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
