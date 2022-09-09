import React from 'react'
import {Link, useParams, useNavigate, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails} from '../Actions/productActions'


const ProductDetailsPage = ({match}) => {

    const [quantity, setQuantity] = useState(1)    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // let history = useHistory();

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const { id } = useParams();

    useEffect(() => {

        dispatch(listProductDetails(id))

    }, [dispatch, id])

    const addToCartHandler = () => {
        console.log('Add to Cart:', id)
        navigate(`/cart/${id}?qty=${quantity}`)
    }

  return (
    <div>

        <Link to='/products'>Go Back</Link>

        {loading ? <h2>Loading...</h2>
            : error ? <h3>{error}</h3> 
            : <div>
             {product.name} 
                Price: ${product.price}
                <br></br>
                {product.quantity > 0 ? 'In Stock' : 'Out Stock'} 
                <br></br>
                <img src={product.image} alt={product.name} />
                <br></br>
                Qty: {product.quantity > 0 && (
                    <form value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        <select>
                        {
                            [...Array(product.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                        }
                        </select>
                        {product.quantity > 0 ? <button onClick={addToCartHandler} type="button">ADD TO CART</button> : null}
                    </form>
                )} 
                </div>
        }
    </div>
  )
}

export default ProductDetailsPage