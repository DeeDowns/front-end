import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getOptimalPrice } from '../store/actions/optimalPriceActions'
import { Col, Row, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap'
import '../styles/OptimalPrice.css'

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
    const [price, setPrice] = useState('')
    const [priceLoading, setPriceLoading] = useState(false)
    const history = useHistory()
    console.log('PRICE', props)

    
  const handleChange = event => {
    setInputs({
      ...inputs, 
      [event.target.name]: event.target.value
    })
  }

//  const getPrice = event => {
//     event.preventDefault()
//     axios.get('https://nate-ds-bw.herokuapp.com/openapi.json')
//       .then(res => {
//         console.log('PRICE RESPONSE', res.data.components.schemas.BnB.properties)
//         const properties = res.data.components.schemas.BnB.properties
//         //Gives the keys and values of the properties in the API
//         var k = Object.keys(properties)
//         var v = Object.values(properties)
//         //K will give the names of the features, v will give both
//          console.log('Results', k, v)
//         // v has the shape {"bathrooms": 2}
//          return v;
//       })
//       .then()
//       .catch(err => {
//         console.log(err)    
//       })
//   }

  //https://nnn-ds16.herokuapp.com/#/default/predict
  //https://nate-ds-bw.herokuapp.com/predict
 const getPrice = event => {
     setPriceLoading(true)
     event.preventDefault()
     axios.post('https://nnn-ds16.herokuapp.com/predict', inputs)
     .then( res => {
         console.log('POST RES',res)
         setPrice(res.data.predicted_price)
         setPriceLoading(false)
     })  
     .catch(err => {
         console.log(err)
         setPriceLoading(false)
     }) 
     
 }

    console.log(Number(price).toFixed(2))

//   useEffect(() => {
//       getPrice()
//   }, [])

//   const getPrice = event => {
//       event.preventDefault()
//       getOptimalPrice()
//   }

    return (
        <div className='price-container'>
            <Form className='price-form' onSubmit={getPrice}>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label># of Guests Included</Label>
                            <Input
                                type='number'
                                name='guests_included'
                                id='guests_included'
                                value={inputs.guests_included}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Accommodates</Label>
                            <Input
                                type='number'
                                name='accomodates'
                                id='accomodates'
                                value={inputs.accomodates}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label> # of Bedrooms</Label>
                            <Input
                                type='number'
                                name='bedrooms'
                                id='bedrooms'
                                value={inputs.bedrooms}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label># of Beds</Label>
                            <Input
                                type='number'
                                name='beds'
                                id='beds'
                                value={inputs.beds}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Bathrooms</Label>
                            <Input
                                type='number'
                                name='bathrooms'
                                id='bathrooms'
                                value={inputs.bathrooms}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    
                    <Col md={4}>
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
                    </Col>

                    <Col md={4}>
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
                    </Col>
                </Row>
            <div className='btn-group'>
                <Button className='save-btn' color='success'>Get Price</Button>
            </div>
        </Form>
       
        <div className='predictor-container'>
            {priceLoading ? <h2>calculating...  <Spinner color="success" style={{ width: '3rem', height: '3rem' }} />{' '}</h2> :  <h2>Your AirBnB Optimal Rate is ${Number(price).toFixed(2)} per night</h2>}
           
            
        </div>

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