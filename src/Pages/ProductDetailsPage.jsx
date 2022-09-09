import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const ProductDetailsPage = ({match}) => {

    const { id } = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {

        async function fetchProduct(){
            const {data} = await axios.get(`/products/${id}`)
            setProduct(data)
        }

        fetchProduct()

    }, [])

  return (
    <div>

        <Link to='/products'>Go Back</Link>
        <br></br>
        {product.name}
        <br></br>
        Price: ${product.price}
        <img src={product.image} alt={product.name} />

    </div>
  )
}

export default ProductDetailsPage