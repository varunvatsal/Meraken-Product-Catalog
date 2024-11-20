import React from 'react'
import Form from 'react-bootstrap/Form';
import style from '../css/filter.module.css'
const Filter = ({item}) => {
  let {ele, productList, setProductList} = item
  
  return (
    <>
      <input type="checkbox" value={ele} className={style.checkBox}/> {ele}
    </>
  )
}

export default Filter