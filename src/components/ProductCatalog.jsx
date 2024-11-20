import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import ProductItem from './ProductItem'
import Search from './Search'
import Accordion from 'react-bootstrap/Accordion';
import style from '../css/productCatalog.module.css'
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const ProductCatalog = () => {
    let [productList, setProductList] = useState([])
    let [allowedProduct, setAllowedProduct] = useState([])
    let [totalCatagory, setTotalCatagory] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("https://run.mocky.io/v3/a7f83c41-4399-46dc-aff7-690ec7a3d486")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProductList(data.items?.map((ele) => ({...ele, visible: true})))
        const unique = [...new Set(data.items.map((ele) => ele.category))]
        setTotalCatagory(unique)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      });
    }, [])
    if(loading) return <p>Loading......</p>

    let updateVisible = (e) => {
        setAllowedProduct((prev) => {
            if(e.target.checked){
                return [...prev, e.target.value]
            }else{
                return prev.filter((ele) => ele != e.target.value)
            }
        })
    }
  return (
    <>
        <h1 className={style.heading}>Product Catalog</h1>
        <Search product={{productList, setProductList}}/>
        <br />
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filter choices</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <div onChange={updateVisible}>
                                {totalCatagory.map((ele, index) => {
                                    return <Filter key={index} item={{ele, productList, setProductList}}/>
                                })}
                            </div>
                        </Form>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <br />
        {allowedProduct.length === 0 ? 
            <Row xs={1} md={5} className="g-4">
                {productList?.map((ele, index) => {
                    return ele.visible &&  (<ProductItem key={index} item={ele} /> )
                })}
            </Row>
        : 
            <Row xs={1} md={5} className="g-4">
                {productList?.map((ele, index) => {
                    return (ele.visible && allowedProduct.includes(ele.category)) &&  (<ProductItem key={index} item={ele} /> )
                })}
            </Row>
        }

    </>
  )
}

export default ProductCatalog