import axios from 'axios'
import {
    PLANT_LIST_REQUEST,
    PLANT_LIST_SUCCESS,
    PLANT_LIST_FAIL,
    PLANT_DETAILS_REQUEST,
    PLANT_DETAILS_SUCCESS,
    PLANT_DETAILS_FAIL,
} from '../Constants/plantConstants'

export const listPlants = () => async (dispatch) => {

    try{

        dispatch({type: PLANT_LIST_REQUEST})

        const {data} = await axios.get('/plants')

        dispatch({
            type: PLANT_LIST_SUCCESS,
            payload:data
        })

    } catch(error){

        dispatch({
            type:PLANT_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
        
    }

}

export const listPlantDetails = (id) => async (dispatch) => {

    try{

        dispatch({type: PLANT_DETAILS_REQUEST})

        const {data} = await axios.get(`/plants/${id}`)

        dispatch({
            type: PLANT_DETAILS_SUCCESS,
            payload:data
        })

    } catch(error){
        dispatch({
            type:PLANT_DETAILS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}