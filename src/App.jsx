import {products} from './mocks/products.json'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'
import Promotions from './components/Promotions'
import Slider from './components/Slider'
import Benefits from './components/Benefits'
import MultiCarousel from './components/MultiCarousel'
import MarcsPromotions from './components/MarcsPromotions'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import FullApp from './components/FullApp'




function App() {

  const {filterProducts} = useFilters()
  
  return (
    <CartProvider>
      <Routes>
        <Route path={'/'} element={<FullApp/>} />
        <Route path={'/products'} element={<Products products={filterProducts(products)}/>}/>
      </Routes>
    </CartProvider>
    
  )
}

export default App
