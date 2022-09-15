import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {listOrdersAll} from '../../Actions/orderActions'

const OrderListAll = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const listOrdersAdmin = useSelector(state => state.listOrdersAdmin)
    const {orders} = listOrdersAdmin

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.is_staff){
            dispatch(listOrdersAll())
        } else {
            navigate('/login')
        }
    }, [dispatch, userInfo, navigate])


  return (
    <div>
        <h2>Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER</th>
                    <th>DATE</th>
                    <th>Total</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>${order.totalPrice}</td>

                                <td>{order.isPaid ? (
                                    order.paidAt.substring(0, 10)
                                ) : (
                                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                                    )}
                                </td>

                                <td>{order.isDelivered ? (
                                    order.deliveredAt.substring(0, 10)
                                ) : (
                                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                                    )}
                                </td>

                                <td>
                                    <Link to={`/orders/${order.id}`}>
                                        <button variant='light' className='btn-sm'>
                                            Details
                                        </button>
                                    </Link>


                                </td>
                            </tr>
                        ))}
                    </tbody>
        </table>


    </div>
  )
}

export default OrderListAll