import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'
import { getOptimalPrice } from '../store/actions/optimalPriceActions'
import { Col, Row, Button, Form, FormGroup, Label, Input, Spinner, Card, CardTitle, } from 'reactstrap'
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
    const { id } = useParams()
    const [minNights, setMinNights] = useState('')
    const [maxNights, setMaxNights] = useState('')

    
  const handleChange = event => {
    setInputs({
      ...inputs, 
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    axiosWithAuth().get(`/api/properties/${id}`)
      .then(res => {
        // console.log(res.data.properties)
        // console.log('MIN',res.data.properties.minumum_nights)
        // console.log('MAX',res.data.properties.maximum_nights)
        setInputs(res.data.properties)
        setMinNights(res.data.properties.minumum_nights)
        setMaxNights(res.data.properties.maximum_nights)
      })
      .catch(err => {
        // console.log(err)
      })
  }, [id])

    //Data sci api
    //https://nnn-ds16.herokuapp.com/#/default/predict
    //https://nate-ds-bw.herokuapp.com/predict
 const getPrice = event => {
     setPriceLoading(true)
     event.preventDefault()
     axios.post('https://nnn-ds16.herokuapp.com/predict', inputs)
     .then( res => {
        //  console.log('POST RES',res)
         setPrice(res.data.predicted_price)
         setPriceLoading(false)
     })  
     .catch(err => {
        //  console.log(err)
         setPriceLoading(false)
     }) 
     
 }

    return (
        <div className='price-container'>
            <Form className='price-form' onSubmit={getPrice}>
                <Row form>

                    <Col md={3}>
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

                    <Col md={3}>
                        <FormGroup>
                            <Label>Guests Included</Label>
                            <Input
                                type='number'
                                name='guests_included'
                                id='guests_included'
                                value={inputs.guests_included}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={3}>
                        <FormGroup>
                            <Label>Bedrooms</Label>
                            <Input
                                type='number'
                                name='bedrooms'
                                id='bedrooms'
                                value={inputs.bedrooms}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={3}>
                        <FormGroup>
                            <Label>Beds</Label>
                            <Input
                                type='number'
                                name='beds'
                                id='beds'
                                value={inputs.beds}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={3}>
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
                    
                    <Col md={3}>
                        <FormGroup>
                            <Label>Min Nights</Label>
                            <Input
                                type='number'
                                name='min_nights'
                                id='min_nights'
                                value={inputs.min_nights || ''} // trouble with making value minNights, input number shows up, but get 422 error when trying to get optimal price
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={3}>
                        <FormGroup>
                            <Label>Max Nights</Label>
                            <Input
                                type='number'
                                name='max_nights'
                                id='max_nights'
                                value={inputs.max_nights || ''} //same issue 
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>


                 
                </Row>
            <div className='btn-group'>
                <Button className='save-btn' style={{ backgroundColor: '#406c47'}}>Get Price</Button>
            </div>
        </Form>
       
        <Card style={{ backgroundColor: '#333', borderColor: '#333' }}  className='predictor-container'>
            {priceLoading ? <CardTitle>calculating...  <Spinner color="success" style={{ width: '3rem', height: '3rem' }} />{' '}</CardTitle> :  <CardTitle>Your AirBnB Optimal Rate is ${Number(price).toFixed(2)} per night</CardTitle>}  
        </Card>

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