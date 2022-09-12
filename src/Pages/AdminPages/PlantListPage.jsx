import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {listPlants, deletePlant, createPlant} from '../../Actions/plantActions'

const PlantListPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const plantList = useSelector(state => state.plantList)
  const {plants, error, pages, page} = plantList

  const plantDelete = useSelector(state => state.plantDelete)
  const {success: successDelete, error: errorDelete} = plantDelete

  const plantCreate = useSelector(state => state.plantCreate)
  const {plant: createdPlant, success: successCreate, error: errorCreate} = plantCreate

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    dispatch({type:'PLANT_CREATE_RESET'})

    if (!userInfo.is_staff) {
      navigate('/users/login')
    }
    
    if(successCreate) {
      navigate(`/admin/plant/${createdPlant.id}/edit`)
    } else {
      dispatch(listPlants())
    }

}, [dispatch, successDelete, successCreate, createdPlant, navigate, userInfo])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this plant?')) {
      dispatch(deletePlant(id))
    } else {
      navigate('/users/login')
    }
  }

  const handleCreatePlant = () => {
    dispatch(createPlant())
  }

  return (
    <div>
        
        <h1>List of Plants</h1>

        <button onClick={handleCreatePlant}>ADD PLANT TO LIST</button>

        {errorDelete && <p>{errorDelete}</p>}

          {plants.map(plant => (
            <div>
                  <p>{plant.id}</p>
                  <p>{plant.name}</p>
                  <p>{plant.price}</p>
                  <p>{plant.description}</p>
                  <Link to={`/admin/plant/${plant.id}/edit`}>EDIT</Link>
                  <button onClick={() => handleDelete(plant.id)}>REMOVE PLANT</button>  
            </div>

            ))}

    </div>
  )
}

export default PlantListPage