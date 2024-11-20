import React from 'react'
import ProductCatalog from './components/ProductCatalog'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemDescription from './components/ItemDescription';
import Button from 'react-bootstrap/Button';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<ProductCatalog />}/>
            <Route path='/itemDescription' element={<ItemDescription />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App