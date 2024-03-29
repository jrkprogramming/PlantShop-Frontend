import axios from 'axios'

export const listPlants = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3000/plants')

  dispatch({
    type: 'PLANT_LIST',
    payload: data,
  })
}

export const listPlantDetails = id => async dispatch => {
  const { data } = await axios.get(`http://localhost:3000/plants/${id}`)

  dispatch({
    type: 'PLANT_DETAILS',
    payload: data,
  })
}

export const deletePlant = id => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }

  const { data } = await axios.delete(`http://localhost:3000/plants/delete/${id}`, config)

  dispatch({
    type: 'PLANT_DELETE',
  })
}

export const createPlant = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }

  const { data } = await axios.post(`http://localhost:3000/plants/create/`, {}, config)

  dispatch({
    type: 'PLANT_CREATE',
    payload: data,
  })
}

export const editPlant = plant => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }

  const { data } = await axios.put(`http://localhost:3000/plants/edit/${plant.id}/`, plant, config)

  dispatch({
    type: 'PLANT_EDIT',
    payload: data,
  })
  // This will update the data when the form is submitted
  dispatch({
    type: 'PLANT_DETAILS',
    payload: data,
  })
}
