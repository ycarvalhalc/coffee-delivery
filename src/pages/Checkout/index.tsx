import { Cart } from "./components/Cart"
import { Payment } from "./components/Payment";
import { AddressForm } from "./components/AddressFormComponent";

import { 
  CheckoutContainer,
  OrderComplement,
} from "./styles";
import { useCart } from '../../hooks/useCart';

export function Checkout() {
  const { cart } = useCart()

  return (
    <CheckoutContainer>
      {!cart.length ? 
        <h3>Carrinho vazio!</h3> : 
        <>
          <OrderComplement>
            <h2>Complete seu pedido</h2>
            <AddressForm />
            <Payment />
          </OrderComplement>

          <Cart/>
        </>
      }
    </CheckoutContainer>
  )
}