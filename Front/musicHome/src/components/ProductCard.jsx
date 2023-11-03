import React from 'react'
import PropTypes from 'prop-types'

export const ProductCard = ({ title, url, price }) => {
    return (
        <div className="col ">
            <div className="card " >
                <img src={url} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{title}</h5>
                    <p className="card-text">$ {price.toLocaleString('es-CO')} COP</p>

                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}
