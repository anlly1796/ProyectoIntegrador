import React from 'react'
import { ProductCard } from './ProductCard'
import PropTypes from 'prop-types'

import { useFetchProducts } from '../hooks/useFetchProducts'
import { useFetchAllProducts } from '../hooks/useFetchAllProducts'


export const ProductsGrid = ({category, lim}) => {
    const {images} = useFetchProducts (category,lim);
    const displayedImages = lim ? images.slice(0,lim): images;
  return (
    <>
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4" id='row-products'>
        {displayedImages.map((image)=>(<ProductCard key={image.id} title={image.title} url={image.url} price={image.price}/>))}

    </div>
    </>
  )
}
ProductsGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
