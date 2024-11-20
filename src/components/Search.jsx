import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const Search = ({product}) => {
  let {productList, setProductList} = product
  let [searchVal, setSearchVal] = useState("")
  let handleChange = (e) => {
    if(e.target.value === ""){
      setProductList((prev) => {
        return prev.map((ele) => {
          return {...ele, visible: true}
        })
      })
    }else {
      setProductList((prev) => {
        return prev.map((ele) => {
          return {...ele, visible: ele.name.toLowerCase().startsWith(e.target.value.toLowerCase()) ? true : false}
        })
      })
    }
    setSearchVal(e.target.value)
  }
  return (
    <>
      <Form.Control size="lg" type="text" placeholder="Search product" value={searchVal} onChange={handleChange}/>
    </>
  )
}

export default Search