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
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">
        
        <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-neutral-100">List of Plants</h1>

        <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-stone-400  dark:focus:ring-blue-800" onClick={handleCreatePlant}>ADD PLANT TO LIST</button>

        {errorDelete && <p>{errorDelete}</p>}

          {plants.map(plant => (
            <div>
                  <p className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">PLANT #: {plant.id}</p>
                  <p className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">{plant.name}</p>
                  <p className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">{plant.price}</p>
                  <p className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">{plant.description}</p>
                  <a class="inline-flex items-center py-2 px-3 mx-[3%] text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-stone-400  dark:focus:ring-blue-800" href={`/admin/plants/${plant.id}/edit`}>EDIT</a>
                  <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-stone-400  dark:focus:ring-blue-800" onClick={() => handleDelete(plant.id)}>REMOVE PLANT</button>
                  <br></br><br></br><br></br>

            </div>

            ))}

    </div>
  )
}

export default PlantListPage