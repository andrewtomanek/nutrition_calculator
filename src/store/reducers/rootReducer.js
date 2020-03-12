import * as actionTypes from "../actions/actionTypes";
import database from "../../data/db.json";

let inventory = localStorage.getItem("inventory");
let cartSession = localStorage.getItem("cart");

let initialArray;
if (inventory) {
  initialArray = JSON.parse(inventory);
} else {
  initialArray = [];
  for (let i = 0; i < 5; i++) {
    initialArray.push(database[i]);
  }
}

let initialCart;
if (cartSession) {
  initialCart = JSON.parse(cartSession);
} else {
  initialCart = [];
}

const initialState = {
  foods: initialArray,
  cart: initialCart,
  allItemSum: null,
  updateItemSum: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INVENTORY:
      return {
        ...state,
        foods: action.payload.foods,
        cart: action.payload.cart
      };
    case actionTypes.FETCH_INVENTORY_FAILED:
      return {
        ...state,
        foods: action.payload
      };
    case actionTypes.SAVE_INVENTORY_START:
      return {
        ...state,
        foods: action.payload
      };
    case actionTypes.SAVE_INVENTORY_SUCCESS:
      return {
        ...state,
        foods: action.payload.foods,
        cart: action.payload.cart
      };
    case actionTypes.SAVE_INVENTORY_FAIL:
      return {
        ...state
      };
    case actionTypes.FILL_STORAGE:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      };
    case actionTypes.ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case actionTypes.ADD_TO_STORAGE:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      };
    case actionTypes.TOGGLE_FOOD:
      return {
        ...state,
        foods: state.foods.map(food =>
          food.id === action.payload ? { ...food, picked: !food.picked } : food
        )
      };
    case actionTypes.UPDATE__QUANTITY:
      return {
        ...state,
        foods: state.foods.map(item =>
          item.id === action.payload[1] ? action.payload[0] : item
        )
      };
    case actionTypes.DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload)
      };
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        cart: state.cart.map(food =>
          food.id === action.payload ? { ...food, picked: !food.picked } : food
        )
      };
    case actionTypes.DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter(food => food.id !== action.payload)
      };
    case actionTypes.DELETE_STORAGE:
      return {
        ...state,
        cart: state.cart.filter(food => food.id !== action.payload)
      };
    case actionTypes.APPLY_FILTER_RESET:
      return {
        ...state,
        foods: [...action.payload]
      };
    case actionTypes.APPLY_CART_REFRESH:
      return {
        ...state,
        cart: [...action.payload]
      };
    case actionTypes.APPLY_FILTER_PICKED:
      return {
        ...state,
        foods: state.foods.filter(food => food.picked === action.payload)
      };
    case actionTypes.APPLY_FILTER_WORD:
      return {
        ...state,
        foods: [...action.payload[0]],
        cart: [...action.payload[1]]
      };
    case actionTypes.DISPLAY_INFO:
      return {
        ...state,
        foods: state.foods.map(food => {
          return { ...food, picked: !food.picked };
        }),
        cart: state.cart.map(item => {
          return { ...item, picked: !item.picked };
        })
      };
    case actionTypes.APPLY_CALCULATE_SUM:
      return {
        ...state,
        allItemSum: action.payload
      };
    case actionTypes.UPDATE_CALCULATE_SUM:
      return {
        ...state,
        updateItemSum: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
