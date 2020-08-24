import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
<<<<<<< HEAD
  const { children, ...rest } = props
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (localStorage.getItem('token')) {
          return children
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: location } }} />
        }
      }}
    />
  )
=======
    const { children, ...rest } = props
    return (
        <Route
            {...rest}
            render={( {location} ) => {
                if(localStorage.getItem('token')) {
                    return children
                } else {
                    return <Redirect to={{ pathname: '/login', state:{ from: location }}} />
                }
            }}
        />
    )
>>>>>>> dcf3c12618e1eedea9898fb865dbff0f1f9d1ec6
}

export default PrivateRoute