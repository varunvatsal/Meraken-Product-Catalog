import React, { Fragment, useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../App';
import '../css/cart.module.css'

const Cart = () => {

  let navigate = useNavigate()
  let value = useContext(cartContext)
  let {productsInCart, setProductsInCart} = value
  console.log(productsInCart)
  return (
    <>
    <h1>CART</h1>
        <nav>
            <br />
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" onClick={() => {navigate('/')}}>
                GO TO HOME
              </Button>
            </div>
        </nav>
        <br />
        <table  >
          <thead>
            <tr>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>IMAGE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {
              productsInCart.map((val) => {
                return (
                  <Fragment key={val.id}>
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.category}</td>
                      <td>{val.price}</td>
                      <td><img src={val.image} alt={val.name} height="70px" width="70px" loading='lazy'/></td>
                      <td>{val.description}</td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>

    </>
  )
}

export default Cart