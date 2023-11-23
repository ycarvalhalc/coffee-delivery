import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_ALREADY_EXISTS = "ADD_PRODUCT_ALREADY_EXISTS",
  REMOVE_PRODUCT_BY_ID = "REMOVE_PRODUCT_BY_ID",
  ADD_QUANTITY_BY_ONE = "ADD_QUANTITY_BY_ONE",
  REMOVE_QUANTITY_BY_ONE = "REMOVE_QUANTITY_BY_ONE"
}

export function addProductAlreadyExistsAction(id: string, quantity: number) {
  return {
    type: ActionTypes.ADD_PRODUCT_ALREADY_EXISTS,
    payload: {
      id,
      quantity
    }
  }
}

export function addProductToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      item
    }
  }
}

export function removeProductByIdAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_BY_ID,
    payload: {
      id
    }
  }
}

export function addQuantityByOneAction(id: string) {
  return {
    type: ActionTypes.ADD_QUANTITY_BY_ONE,
    payload: {
      id
    }
  }
}

export function removeQuantityByOneAction(id: string) {
  return {
    type: ActionTypes.REMOVE_QUANTITY_BY_ONE,
    payload: {
      id
    }
  }
}