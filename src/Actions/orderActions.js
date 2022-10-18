import axios from "axios";

export const orderCreate = (order) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.post(
    `plantshop-backend.herokuapp.com/orders/add/`,
    order,
    config
  );

  dispatch({
    type: "ORDER_CREATE",
    payload: data,
  });

  dispatch({
    type: "CART_CLEAR",
    payload: data,
  });

  localStorage.removeItem("cartItems");
};

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.put(
    `plantshop-backend.herokuapp.com/orders/${id}/pay/`,
    paymentResult,
    config
  );

  dispatch({
    type: "ORDER_PAID",
    payload: data,
  });
};

export const listOrders = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.get(
    `plantshop-backend.herokuapp.com/orders/myorders`,
    config
  );

  dispatch({
    type: "ORDER_LIST",
    payload: data,
  });
};

export const listOrdersAll = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.get(
    `plantshop-backend.herokuapp.com/orders/`,
    config
  );

  dispatch({
    type: "ORDER_LIST_ADMIN",
    payload: data,
  });
};
