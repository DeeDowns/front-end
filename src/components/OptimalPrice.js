import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getOptimalPrice } from '../store/actions/optimalPriceActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const initalInputs = {
    bedrooms: '',
    beds: '',
    bathrooms: '',
    guests_included: '',
    accomodates: '',
    min_nights: '',
    max_nights: ''
}
const OptimalPrice = props => {
    const [inputs, setInputs] = useState(initalInputs)
    console.log('PRICE', props)

    
  const handleChange = event => {
    setInputs({
      ...inputs, 
      [event.target.name]: event.target.value
    })
  }

 const getPrice = event => {
    event.preventDefault()
    axios.get('https://nate-ds-bw.herokuapp.com/openapi.json')
      .then(res => {
        console.log('PRICE RESPONSE', res.data.components.schemas.BnB.properties)
        const properties = res.data.components.schemas.BnB.properties
        var k = Object.keys(properties)
        var v = Object.values(properties)
        //  var result = Object.keys(properties).map(function(keys){
        //      return [keys, properties(keys)]
        //  })
         console.log('Results', k, v)
      })
      .catch(err => {
        console.log(err)    
      })
  }

//   useEffect(() => {
//       getPrice()
//   }, [])

//   const getPrice = event => {
//       event.preventDefault()
//       getOptimalPrice()
//   }

    return (
        <div>
            <h1>hi</h1>
        <Form className='edit-form' onSubmit={getPrice}>
      
      <h1>Edit Property/Listing</h1>
      <FormGroup>
      <Label>Number of Bedrooms</Label>
        <Input
          type='number'
          name='bedrooms'
          id='bedrooms'
          value={inputs.bedrooms}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Number of Bathrooms</Label>
        <Input
          type='number'
          name='bathrooms'
          id='bathrooms'
          value={inputs.bathrooms}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
    <Label>Number of Beds</Label>
        <Input
          type='number'
          name='beds'
          id='beds'
          value={inputs.beds}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
    <Label>Number of Guests Included</Label>
        <Input
          type='number'
          name='guests_included'
          id='guests_included'
          value={inputs.guests_included}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Accomodates</Label>
        <Input
          type='number'
          name='accomodates'
          id='accomodates'
          value={inputs.accomodates}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Min Nights</Label>
        <Input
          type='number'
          name='min_nights'
          id='min_nights'
          value={inputs.min_nights}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label>Max Nights</Label>
        <Input
          type='number'
          name='max_nights'
          id='max_nights'
          value={inputs.max_nights}
          onChange={handleChange}
        />
        </FormGroup>
      <Button className='save-btn' color='success'>Save Changes</Button>

    </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      properties: state.propertiesReducer.properties,
      property: state.propertiesReducer.property,
      isLoading: state.propertiesReducer.isLoading,
      error: state.propertiesReducer.error,
      optimalPrice: state.optimalPriceReducer.predictedPrice
    }
  }

export default connect(mapStateToProps, { getOptimalPrice })(OptimalPrice)