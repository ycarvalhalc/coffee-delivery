import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ActionsContainer, HeaderContainer, Location } from "./styles";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg"

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} />
      </NavLink>
      
      <ActionsContainer>
        <Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </Location>
        
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}