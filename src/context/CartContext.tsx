import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItem, cartReducer } from "../reducers/cart/reducer";
import { ActionTypes, addProductAlreadyExistsAction, addProductToCartAction } from "../reducers/cart/actions";

interface CartContextType {
  cart: CartItem[]
  AddProductToCart: (item: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: []
  }, (initialState) => {
    const storedStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0")

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  const { cart } = cartState

  function AddProductToCart(item: CartItem) {
    const productAlreadyExists = cart.some(cartItem => cartItem.product.id === item.product.id)

    if (productAlreadyExists) {
      dispatch(addProductAlreadyExistsAction(item.product.id, item.quantity))
    } else {
      dispatch(addProductToCartAction(item))
    }
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider 
      value={{
        cart: cart,
        AddProductToCart: AddProductToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}