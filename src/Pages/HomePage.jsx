import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../Components/Product'


const HomePage = () => {
  
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProducts(){
            const {data} = await axios.get('/products')
            setProducts(data)
        }

        fetchProducts()

    }, [])
  
  
    return (
    <div>
        
        {products.map(product => (
                <p>
                    
                    <a href={`/products/${product.id}`} key={product.id}>{product.name}</a>
                    <Product product={product}></Product>
                </p>
        ))}


    </div>
  )
}

export default HomePage