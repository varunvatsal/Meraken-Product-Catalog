import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../App';


const Cart = () => {

  let navigate = useNavigate()
  let value = useContext(cartContext)
  let {productsInCart, setProductsInCart} = value
  console.log(productsInCart)
  return (
    <>
        <nav>
            <br />
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" onClick={() => {navigate('/')}}>
                GO TO HOME
              </Button>
            </div>
        </nav>

        {productsInCart.map((val) => {
          return <h1 key={val.id}>{val.name}</h1>
        })}

    </>
  )
}

export default Cart