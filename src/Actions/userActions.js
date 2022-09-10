import axios from 'axios';




export const login = (email, password) => async (dispatch) => {

    const config = {
        headers:{
            'Content-type' : 'application/json'
        }
    }

    const {data} = await axios.post(
        '/users/login/',
        {'username': email, 'password': password},
        config
        )

    dispatch({
        type: 'USER_LOGIN',
        payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: 'USER_LOGOUT'})
}