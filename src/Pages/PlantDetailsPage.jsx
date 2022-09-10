import React from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listPlantDetails} from '../Actions/plantActions'


const PlantDetailsPage = () => {

    const [quantity, setQuantity] = useState(1)    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();

    const plantDetails = useSelector(state => state.plantDetails)
    const {plant} = plantDetails


    useEffect(() => {

        dispatch(listPlantDetails(id))

    }, [dispatch, id])

    const addToCartHandler = () => {
        // console.log('Add to Cart:', id)
        navigate(`/cart/${id}?cartQty=${quantity}`)
    }

  return (
    <div>

        <Link to='/plants'>Go Back</Link>
        <br></br>                <br></br>                <br></br>
        <div>
            {plant.name} 
                <br></br>
            Price: ${plant.price}
                <br></br>
            {plant.quantity > 0 ? 'In Stock' : 'Out of Stock'} 
                <br></br>
            Description:
            {plant.description}
                <br></br>
            <img src={plant.image} alt={plant.name} />
                <br></br>
            {plant.quantity > 0 && (
                <form value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                   Qty: <select>
                        {
                            [...Array(plant.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                        </select>
                        {plant.quantity > 0 ? <button onClick={addToCartHandler} type="button">ADD TO CART</button> : null}
                    </form>
            )} 
        </div>
    </div>
  )
}

export default PlantDetailsPage