import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from '../css/itemDescription.module.css'

const ItemDescription = () => {
  let navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const product = {
    id: searchParams.get("id"),
    name: searchParams.get("name"),
    category: searchParams.get("category"),
    price: searchParams.get("price"),
    image: searchParams.get("image"),
    description: searchParams.get("description")
  }
  let {id, name, category, price, image, description} = product;


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

        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={image} alt={name} className={styles.image} />
          </div>
          <div className={styles.details}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.category}>Category: {category}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>Price: ${price}</p>
          </div>
        </div>
    </>
  )
}

export default ItemDescription

