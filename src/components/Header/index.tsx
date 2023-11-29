import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ActionsContainer, HeaderContainer, Nav } from "./styles";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg"
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart()

  const totalQuantity = cart.map((itemCart) => itemCart.quantity)
    .reduce((total, currentValue) => total + currentValue, 0)

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} />
        </NavLink>
        
        <ActionsContainer>
          {/* <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location> */}
          
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
          </NavLink>
        </ActionsContainer>
      </Nav>
    </HeaderContainer>
  )
}