import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItem, Order, cartReducer } from "../reducers/cart/reducer";
import { addItemAction, incrementItemQuantityAction, removeProductByIdAction, decrementIemQuantityAction, addPaymentMethodAction, checkoutAction } from "../reducers/cart/actions";
import { AddressInfo } from "../pages/Checkout/components/AddressFormComponent";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart: CartItem[]
  order: Order
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  incrementItemQuantity: (id: string) => void
  decrementItemQuantity: (id: string) => void
  addPaymentMethod: (type: string) => void
  checkout: (data: AddressInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    order: {}
  }, (initialState) => {
    const storedStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0")

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  const { cart, order } = cartState
  const navigate = useNavigate()

  function addItem(item: CartItem) {
    dispatch(addItemAction(item))
  }

  function removeItem(id: string) {
    dispatch(removeProductByIdAction(id))
  }

  function incrementItemQuantity(id: string) {
    dispatch(incrementItemQuantityAction(id))
  }

  function decrementItemQuantity(id: string) {
    dispatch(decrementIemQuantityAction(id))
  }

  function addPaymentMethod(type: string) {
    dispatch(addPaymentMethodAction(type))
  }

  function checkout(data: AddressInfo) {
    dispatch(checkoutAction(data, navigate))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider 
      value={{
        cart,
        order,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        addPaymentMethod,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}