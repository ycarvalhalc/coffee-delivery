import { produce } from "immer"

import { ActionTypes } from "./actions"

export interface Product {
  id: string
  img_url: string
  tags: string[]
  title: string
  description: string
  price: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  cart: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch(action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, draft => {
        draft.cart.push(action.payload.item)
      })

    case ActionTypes.ADD_PRODUCT_ALREADY_EXISTS: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      } 

      return produce(state, draft => {
        draft.cart[currentCartItem].quantity += action.payload.quantity
      })
    }

    case ActionTypes.REMOVE_PRODUCT_BY_ID: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      } 

      return produce(state, draft => {
        draft.cart.splice(currentCartItem, 1)
      })
    }

    case ActionTypes.ADD_QUANTITY_BY_ONE: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      } 

      return produce(state, draft => {
        draft.cart[currentCartItem].quantity += 1
      })
    }

    case ActionTypes.REMOVE_QUANTITY_BY_ONE: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      }

      return produce(state, draft => {
        if (draft.cart[currentCartItem].quantity === 1) {
          draft.cart.splice(currentCartItem, 1)
        } else {
          draft.cart[currentCartItem].quantity = draft.cart[currentCartItem].quantity - 1
        }
      })
    }

    default:
      return state
  }
}