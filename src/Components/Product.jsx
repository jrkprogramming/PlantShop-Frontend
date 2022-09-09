import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div>
        
        <div>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            Price: ${product.price}
            <img src={product.image} alt={product.name} />
            
        </div>

    </div>
  )
}

export default Product