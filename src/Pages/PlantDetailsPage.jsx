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
        navigate(`/cart/${id}?cartQty=${quantity}`)
    }

  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">

        <a href={`/plants/`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> GO BACK

    </a>


        <br></br>                <br></br>                <br></br>


        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <h1>{plant.name} </h1>
                <br></br>
            {plant.description}
            <br></br><br></br>
            <div>
                <img src={plant.image} alt={plant.name} />
            </div>
            <br></br>
            Price: ${plant.price}
            <br></br>
            {plant.quantity > 0 ? 'In Stock' : 'Out of Stock'} 
                
                <br></br><br></br>

            {plant.quantity > 0 && (
                <form value={quantity} onChange={(e) => setQuantity(e.target.value)} className="px-5">
                   Qty: <select className="inline-flex items-center py-1 px-2 text-sm font-medium text-center text-black focus:ring-4 focus:outline-none focus:ring-blue-300  mr-5">
                        {
                            [...Array(plant.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                        </select>
                        {plant.quantity > 0 ? <button onClick={addToCartHandler} type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD TO CART</button> : null}
                    </form>

            )} 
        </div>
    </div>
  )
}

export default PlantDetailsPage