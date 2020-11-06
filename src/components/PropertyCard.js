import React from 'react'
import '../styles/PropertyCard.css'
import  { Card, CardTitle, CardText} from 'reactstrap';

export default function PropertyCard(props) {

  const { property, id } = props;
  // console.log(property, id)



  return (
    <Card style={{ backgroundColor: '#333', borderColor: '#333' }} className='property-card-container'>
      <CardTitle className='title'>{property.street_address}</CardTitle>
      <CardText className='text'>click for more info</CardText>
    </Card>
  )
}