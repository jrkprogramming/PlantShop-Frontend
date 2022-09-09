import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../Actions/productActions'
import Product from '../Components/Product'


const HomePage = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state=>state.productList)
    const {error, loading, products} = productList

    useEffect(() => {

        dispatch(listProducts())

    }, [dispatch])
  
  
    return (
    <div>

        {loading ? <h2>Loading...</h2>
            : error ? <h3>{error}</h3>
            : <div>
                {products.map(product => (
                <p>
                    <Product product={product}></Product>
                </p>
        ))}</div>
        }
        



    </div>
  )
}

export default HomePage