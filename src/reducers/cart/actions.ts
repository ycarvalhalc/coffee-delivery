import { NavigateFunction } from "react-router-dom";
import { AddressInfo } from "../../pages/Checkout/components/AddressFormComponent";
import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_ITEM = "ADD_PRODUCT_TO_CART",
  REMOVE_ITEM = "REMOVE_PRODUCT_BY_ID",
  INCREMENT_ITEM_QUANTITY = "ADD_QUANTITY_BY_ONE",
  DECREMENT_ITEM_QUANTITY = "REMOVE_QUANTITY_BY_ONE",
  ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD",
  CHECKOUT = "CHECKOUT"
}

export function addItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item
    }
  }
}

export function removeProductByIdAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id
    }
  }
}

export function incrementItemQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      id
    }
  }
}

export function decrementIemQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      id
    }
  }
}

export function addPaymentMethodAction(paymentMethod: string) {
  return {
    type: ActionTypes.ADD_PAYMENT_METHOD,
    payload: {
      paymentMethod
    }
  }
}

export function checkoutAction(addressInfo: AddressInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      addressInfo,
      callback
    }
  }
}