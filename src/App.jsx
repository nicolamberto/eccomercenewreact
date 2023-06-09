import {products} from './assets/mocks/products.json'
import './App.css'
import Products from './assets/components/Products'
import { useState } from 'react'
import { Filter } from '@mui/icons-material'
import Header from './assets/components/Header'

function App() {
  
  const [filters, setFilters] = useState({
    category:'smartphones',
    minPrice:30
  })

  console.log(filters.minPrice);
  console.log(filters.category);

  const filterProducts = (products)=>{
    return products.filter(product =>{
      return (
        product.price >= filters.minPrice && 
          (
            filters.category === 'all' || 
            product.category === filters.category
          )
        )
      }
    )
  }

  return (
    <>
    <Header setFilters={setFilters}/>
    <Products fil={setFilters} products={filterProducts(products)}/>
    </>
  )
}

export default App
