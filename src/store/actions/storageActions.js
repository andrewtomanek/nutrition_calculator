import * as actionTypes from "./actionTypes";

export const initInventory = authData => {
  return {
    type: actionTypes.INIT_INVENTORY,
    authData: authData
  };
};

export const setInventory = inventory => {
  return {
    type: actionTypes.SET_INVENTORY,
    payload: inventory
  };
};

export const fetchInventoryFailed = () => {
  return {
    type: actionTypes.FETCH_INVENTORY_FAILED
  };
};
export const saveToStore = userData => {
  return {
    type: actionTypes.SAVE_INVENTORY,
    payload: userData
  };
};

export const saveToStoreStart = () => {
  return {
    type: actionTypes.SAVE_INVENTORY_START
  };
};

export const saveToStoreSuccess = inventory => {
  return {
    type: actionTypes.SAVE_INVENTORY_SUCCESS,
    payload: inventory
  };
};

export const saveToStoreFail = error => {
  return {
    type: actionTypes.SAVE_INVENTORY_FAIL,
    payload: error
  };
};

export const fillStorage = item => {
  return {
    type: actionTypes.FILL_STORAGE,
    payload: item
  };
};
export const addFoodAction = food => {
  return {
    type: actionTypes.ADD_FOOD,
    payload: food
  };
};

export const addToCart = food => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: food
  };
};

export const addToStorage = item => {
  return {
    type: actionTypes.ADD_TO_STORAGE,
    payload: item
  };
};

export const toggleFoodComplete = foodId => {
  return {
    type: actionTypes.TOGGLE_FOOD,
    payload: foodId
  };
};

export const updateQuantity = quantity => {
  return {
    type: actionTypes.UPDATE__QUANTITY,
    payload: quantity
  };
};

export const deleteFoodAction = foodId => {
  return {
    type: actionTypes.DELETE_FOOD,
    payload: foodId
  };
};

export const toggleCartComplete = foodId => {
  return {
    type: actionTypes.TOGGLE_CART,
    payload: foodId
  };
};

export const deleteCartAction = foodId => {
  return {
    type: actionTypes.DELETE_CART,
    payload: foodId
  };
};

export const deleteStorageAction = item => {
  return {
    type: actionTypes.DELETE_STORAGE,
    payload: item
  };
};

export const applyFilterReset = filter => {
  return {
    type: actionTypes.APPLY_FILTER_RESET,
    payload: filter
  };
};

export const applyCartRefresh = oldCart => {
  return {
    type: actionTypes.APPLY_CART_REFRESH,
    payload: oldCart
  };
};

export const applyFilterPicked = filter => {
  return {
    type: actionTypes.APPLY_FILTER_PICKED,
    payload: filter
  };
};

export const applyFilterWord = filter => {
  return {
    type: actionTypes.APPLY_FILTER_WORD,
    payload: filter
  };
};

export const displayInformation = () => {
  return {
    type: actionTypes.DISPLAY_INFO
  };
};

export const applycalculateSum = sum => {
  return {
    type: actionTypes.APPLY_CALCULATE_SUM,
    payload: sum
  };
};

export const updateCalculateSum = sum => {
  return {
    type: actionTypes.UPDATE_CALCULATE_SUM,
    payload: sum
  };
};
