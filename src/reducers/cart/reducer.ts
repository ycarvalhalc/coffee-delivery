import { produce } from "immer"

import { ActionTypes } from "./actions"
import { AddressInfo } from "../../pages/Checkout/components/AddressFormComponent"

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

export interface Order {
  address: AddressInfo
  paymentMethod: "credit" | "debit" | "cash"
}

export interface CartState {
  cart: CartItem[]
  order: Order
}

export function cartReducer(state: CartState, action: any) {
  switch(action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const itemAlreadyAdded = draft.cart.find(
          item => item.product.id === action.payload.id
        )
        
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      } 

      return produce(state, draft => {
        draft.cart.splice(currentCartItem, 1)
      })
    }

    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      const currentCartItem = state.cart.findIndex(cartItem => cartItem.product.id === action.payload.id)

      if (currentCartItem < 0) {
        return state
      } 

      return produce(state, draft => {
        draft.cart[currentCartItem].quantity += 1
      })
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
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

    case ActionTypes.ADD_PAYMENT_METHOD: {
      return produce(state, draft => {
        draft.order.paymentMethod = action.payload.paymentMethod
      })
    }

    case ActionTypes.CHECKOUT: {
      return produce(state, draft => {
        draft.order.address = action.payload.addressInfo
        draft.cart = []

        action.payload.callback('/order/success')
      })
    }

    default:
      return state
  }
}