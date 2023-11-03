import React, { useState } from 'react'
import { ProductsGrid } from '../components/ProductsGrid'
import { useLocation } from 'react-router-dom'

export const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get('prod')
  
  



  return (
    <ProductsGrid key={query} category={query} />
  )
}
