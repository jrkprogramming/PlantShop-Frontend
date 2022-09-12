import axios from 'axios'

export const listPlants = () => async (dispatch) => {

        const {data} = await axios.get('/plants')

        dispatch({
            type: 'PLANT_LIST',
            payload: data
        })
}

export const listPlantDetails = (id) => async (dispatch) => {

        const {data} = await axios.get(`/plants/${id}`)

        dispatch({
            type: 'PLANT_DETAILS',
            payload: data
        })

}

export const deletePlant = (id) => async (dispatch, getState) => {

    const {
        userLogin: {userInfo},
    } = getState();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    const {data} = await axios.delete(
        `/plants/delete/${id}`,
        config
        )

    dispatch({
        type: 'PLANT_DELETE',
        payload: data
    })
}