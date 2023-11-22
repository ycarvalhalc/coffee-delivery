import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_ALREADY_EXISTS = "ADD_PRODUCT_ALREADY_EXISTS"
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