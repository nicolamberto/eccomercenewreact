import React from 'react';
import {products} from '../mocks/products.json'

import Products from '../components/Products'
import Header from '../components/Header'
import { useFilters } from '../hooks/useFilters'
import { CartProvider } from '../context/cart'
import Promotions from '../components/Promotions'
import Slider from '../components/Slider'
import Benefits from '../components/Benefits'
import MultiCarousel from '../components/MultiCarousel'
import MarcsPromotions from '../components/MarcsPromotions'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import App from '../App';




function FullApp (){

const {filterProducts} = useFilters()

  return (
    <>
      <Header />
      <Slider/>
      <Benefits/>
      <MultiCarousel products={products}/>
      <MarcsPromotions/> 
     {/*  <Products products={filterProducts(products)}/> */}
     <Footer/>
    </>
  )
}

export default FullApp
