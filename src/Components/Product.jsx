import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div>
        
        <div>
            <Link to={`/products/${product.id}`}/>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
        </div>

    </div>
  )
}

export default Product