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