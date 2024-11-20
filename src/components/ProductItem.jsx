import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
const ProductItem = ({item}) => {
  
    let navigate = useNavigate()
    const query = new URLSearchParams(item).toString();

    return (
    <>
      <Col>
        <Card border={item.id%2===0 ? 'primary' : 'success'} style={{ width: '18rem', height: '23rem'}}>
          <Card.Img variant="top" src={item.image} height="200px" width="200px" alt={item.name} loading='lazy'/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="outline-primary" onClick={() => {navigate(`/itemDescription?${query}`)}}>Description</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ProductItem

