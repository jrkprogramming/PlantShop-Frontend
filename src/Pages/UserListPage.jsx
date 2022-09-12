import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {listUsers} from '../Actions/userActions'

const UserListPage = () => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {users, error} = userList

    useEffect(() => {
        dispatch(listUsers())
    },[dispatch])
    
  return (
    <div>
        
        <h1>Users</h1>

            <thead>
                <td>ID</td>
                <td>Name</td>
                <td>EMAIL</td>
                <td>ADMIN</td>
            </thead>

    </div>
  )
}

export default UserListPage