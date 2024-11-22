import React, { createContext, useState } from 'react'
import ProductCatalog from './components/ProductCatalog'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemDescription from './components/ItemDescription';
import Cart from './components/Cart';

export let cartContext = createContext()

const App = () => {

  let [productsInCart, setProductsInCart] = useState([])

  return (
    <>
        <cartContext.Provider value={{productsInCart, setProductsInCart}}>
          <Router>
            <Routes>
              <Route path='/' element={<ProductCatalog />}/>
              <Route path='/itemDescription' element={<ItemDescription />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </Router>
        </cartContext.Provider>
    </>
  )
}

export default App