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
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(0)

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

    const handleImgUpload = async (e) => {
        const img = e.target.files[0]
        const formData = new FormData()

        console.log(img)
        console.log(formData)

        formData.append('image', img)
        formData.append('plant_id', id)

        // try {
            const config = {
                headers: {'Content-type': 'multipart/form-data'}
            }

            const {data} = await axios.post('http://localhost:8000/plants/imgUpload/', formData, config)
            setImage(data)
            console.log('uploaded')
        // } catch (error) {
        //     console.log(error)
        //     console.log('error')
        // }
    }

  return (
    <div>
        
        <Link to={'/admin/plantList'}> Back </Link>


        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}></input>
            <input type="number" value={price} placeholder="Enter price" onChange={(e) => setPrice(e.target.value)}></input>
            {/* <input type="text" value={image} placeholder="Enter image" onChange={(e) => setImage(e.target.value)}></input> */}
            
            {/* <input onChange={handleImgUpload}></input> */}
            

            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={handleImgUpload}></input>
            


            <input type="text" value={description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}></input>
            <input type="number" value={quantity} placeholder="Enter quantity" onChange={(e) => setQuantity(e.target.value)}></input>

            <button type="submit">UPDATE</button>
        </form>
        <form onSubmit={handleSubmit}>
        </form>
    </div>
  )
}

export default PlantEditPage