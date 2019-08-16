import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  removedIds: [],
  quantityById: {}
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const removedIds = (state = initialState.addedIds, action) => {
  const index = state.findIndex(item => item.id === action.payload.id);
  switch (action.type) {
    case REMOVE_FROM_CART:
      return state.filter((_, i) => i !== index);
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const { productId } = action;
      return { ...state, [productId]: (state[productId] || 0) + 1 };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) => state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;
export const getRemovedIds = state => state.removedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        removedIds: removedIds(state.removedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
};

export default cart;
