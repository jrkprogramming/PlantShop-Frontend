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
    <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[10%] my-[5%]">



        <a href={`/plants/`} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">BACK</a>


        <br></br>                <br></br>                <br></br>


        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-white">{plant.name} </h1>
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
                <form value={quantity} onChange={(e) => setQuantity(e.target.value)} className="ml-[10%] px-[20%]">
                   Qty: <select className="inline-flex items-center px-3 py-2 mr-[40%] text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        {
                            [...Array(plant.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                        </select>
                        {plant.quantity > 0 ? <button onClick={addToCartHandler} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-stone-400 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>ADD TO CART</button> : null}
                    </form>

            )} 
        </div>
    </div>
  )
}

export default PlantDetailsPage