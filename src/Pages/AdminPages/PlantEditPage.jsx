import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {listPlantDetails, editPlant} from '../../Actions/plantActions'

const PlantEditPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')

    const plantDetails = useSelector(state=> state.plantDetails)
    const {plant} = plantDetails

    const plantEdit = useSelector(state=> state.plantEdit)
    const {success:successfulEdit} = plantEdit

    useEffect(() =>{

        if(successfulEdit){
            dispatch({type: 'PLANT_EDIT_RESET'})
            navigate('/admin/plantList')
        } else {
            if (!plant.name || plant.id !== Number(id)) {
                dispatch(listPlantDetails(id))
            } else {
                setName(plant.name)
                setPrice(plant.price)
                setImage(plant.image)
                setDescription(plant.description)
                setQuantity(plant.quantity)
            }
        }

    }, [plant, id, navigate, dispatch, successfulEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editPlant({
            id:id,
            name,
            price,
            image,
            description,
            quantity,

        }))
    }

  return (
    <div>
        
        <Link to={'/admin/plantList'}> Back </Link>


        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}></input>
            <input type="number" value={price} placeholder="Enter price" onChange={(e) => setPrice(e.target.value)}></input>
            <input type="text" value={image} placeholder="Enter image" onChange={(e) => setImage(e.target.value)}></input>
            <input type="text" value={description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}></input>
            <input type="number" value={quantity} placeholder="Enter quantity" onChange={(e) => setQuantity(e.target.value)}></input>

            <button type="submit">UPDATE</button>
        </form>

    </div>
  )
}

export default PlantEditPage