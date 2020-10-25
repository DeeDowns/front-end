import React, {useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, fetchPropertyById } from '../store/actions/propertiesActions'
import OptimalPrice from './OptimalPrice'

import { Button, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, UncontrolledCollapse } from 'reactstrap'
import '../styles/Property.css'




const Property = (props) => {
  console.log('PROPERTY', props)
  const { id } = useParams()
  let history = useHistory()

  useEffect(() => {
    props.fetchPropertyById(id)
  }, [id])

  // console.log(props)
  

   const handleDelete = event => {
     event.preventDefault()
     axiosWithAuth().delete(`/api/properties/${id}`)
     .then(res => {
      //  console.log(res)
       history.push('/properties')
     })
     .catch(err => {
       console.log(err)
     })

   }

    console.log('PROPS', props.property)
  return (
    <div className='main-container'>
      
      {props.isLoading ? <h3>Fetching Properties......<Spinner type="grow" color="success" style={{ width: '6rem', height: '6rem' }}/></h3> : null}
      {props.property && <>
      <div className='img-container'>
          <h1>{props.property.street_address}</h1>
      </div>

      <div className='price-div'>
      <h2>Want to see how much this property could make?</h2>
      <Button className='price-btn' style={{ backgroundColor: '#406c47'}} id='toggler' > Optimal Price Calculator</Button>
      <UncontrolledCollapse toggler='#toggler'>
        <OptimalPrice />
       </UncontrolledCollapse>
      </div>
    
      <ListGroup horizontal>
        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading>Location</ListGroupItemHeading>
            <ListGroupItemText>{props.property.city} (Zip Code: {props.property.zip})</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading># of Bedrooms</ListGroupItemHeading>
            <ListGroupItemText>{props.property.bedrooms}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading># of Bathrooms</ListGroupItemHeading>
            <ListGroupItemText>{props.property.bathrooms}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading># of Beds </ListGroupItemHeading>
            <ListGroupItemText>{props.property.beds}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading># of Guests Included</ListGroupItemHeading>
            <ListGroupItemText>{props.property.guests_included}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading>Accommodates</ListGroupItemHeading>
            <ListGroupItemText>{props.property.accomodates}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading>Minimum Nights</ListGroupItemHeading>
            <ListGroupItemText>{props.property.minumum_nights}</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroupItemHeading>Maximum Nights</ListGroupItemHeading>
            <ListGroupItemText>{props.property.maximum_nights}</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      <div className='button-container'>
        <Button className='edit-btn' style={{ backgroundColor: '#406c47'}} onClick={() => history.push(`/edit-property/${props.property.id}`)}>Edit Listing</Button>
        <Button className='delete-btn' style={{ backgroundColor: '#406c47'}} onClick={handleDelete}>Remove Listing</Button>
        <Button className='back-btn' style={{ backgroundColor: '#406c47'}} onClick={() => history.push('/properties')}>Back</Button>
        
      </div>
      </>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.propertiesReducer.properties,
    property: state.propertiesReducer.property.properties,
    isLoading: state.propertiesReducer.isLoading,
    error: state.propertiesReducer.error
  }
}

export default connect(mapStateToProps, { fetchProperties, fetchPropertyById })(Property)