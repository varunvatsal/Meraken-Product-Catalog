import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    let navigate = useNavigate()

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
    </>
  )
}

export default Cart