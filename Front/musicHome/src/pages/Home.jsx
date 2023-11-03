import React, { useState } from 'react'
import { Carousel } from '../components/Carousel'
import { ProductsGrid } from '../components/ProductsGrid'


export const Home = () => {

  const [categories, setcategories] = useState(['Rubbed Strings', 'Guitars', 'Wind', 'Keyboard', 'Percussion', 'Accessories', 'Others'])
  
  return (
    <>
    <Carousel/>
    <h1 className='homeTitle'>Our Products </h1>


    {categories.map((category)=>(
      <ProductsGrid key={category} category={category}  lim={5}/>
    ))}
    </>
  )
}
