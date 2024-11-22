import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../App';

const ProductItem = ({item}) => {
  
    let navigate = useNavigate()
    const query = new URLSearchParams(item).toString();
    let value = useContext(cartContext)
    let {productsInCart, setProductsInCart} = value
    console.log(item)
    let toShow = false
    productsInCart.forEach((ele) =>{
      if(ele.id===item.id){
        toShow = true
      }
    })
    let addToCart = () => {
        setProductsInCart((prev) => {
          return [...prev, item]
        })
    }

    let removeFromCart = () => {
      setProductsInCart((prev) => {
        return prev.filter((ele) => {
          return !(ele.id === item.id)
        })
      })
    }

    return (
    <>
      <Col>
        <Card border={item.id%2===0 ? 'primary' : 'success'} style={{ width: '18rem', height: '24rem'}}>
          <Card.Img variant="top" src={item.image} height="200px" width="200px" alt={item.name} loading='lazy'/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="outline-primary" onClick={() => {navigate(`/itemDescription?${query}`)}}>Description</Button>
            <span>{" "}</span>
            {toShow ? <Button variant="outline-primary" onClick={removeFromCart}>Remove</Button> : <Button variant="outline-primary" onClick={addToCart}>Add2Cart</Button>}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ProductItem

