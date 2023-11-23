import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { 
  AddressFormContainer, 
  AddressHeader, 
  AddressHeaderContent,
  CartContainer, 
  CheckoutContainer, 
  InputSmall, 
  InputFullWidth, 
  OrderComplement,
  InputExtraSmall,
  GroupInputs,
  InputBase,
  PaymentHeader,
  PaymentHeaderContent,
  BaseContainer,
  PaymentContainer,
  Cart,
  CartItem,
  Price,
  ItemActions,
  Separator,
  RemoveButton,
  ConfirmOrderButton,
  TotalizerContainer,
  TotalizerItem,
  TotalContent
} from "./styles";
import { QuantityButton } from "../Home/ProductActionForm/styles";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react'
import { FormattedNumber } from "react-intl";

export function Checkout() {
  const { cart, RemoveProductById, AddQuantityByOne, RemoveQuantityByOne } = useContext(CartContext)

  const totalPrice = cart.reduce((total, currentValue) => {
    return total += (currentValue.quantity * currentValue.product.price)
  }, 0)

  return (
    <CheckoutContainer>
      <OrderComplement>
        <h2>Complete seu pedido</h2>
        <BaseContainer>
          <AddressHeader>
            <MapPinLine size={22}/>
            <AddressHeaderContent>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressHeaderContent>
          </AddressHeader>
          
          <AddressFormContainer>
            <form>
              <InputSmall type="number" placeholder="CEP" />

              <InputFullWidth type="text" placeholder="Rua" />

              <GroupInputs>
                <InputSmall type="number" placeholder="Número" />
                <InputBase type="text" placeholder="Complemento" />
              </GroupInputs>

              <GroupInputs>
                <InputSmall type="text" placeholder="Bairro" />
                <InputBase type="text" placeholder="Cidade" />
                <InputExtraSmall type="text" placeholder="UF" />
              </GroupInputs>
            </form>
          </AddressFormContainer>
        </BaseContainer>

        <BaseContainer>
          <PaymentHeader>
            <CurrencyDollar size={22}/>
            <PaymentHeaderContent>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </PaymentHeaderContent>
          </PaymentHeader>

          <PaymentContainer>
            <button type="button"><CreditCard size={16} /> cartão de crédito</button>
            <button type="button"><Bank size={16} />cartão de débito</button>
            <button type="button"><Money size={16} />dinheiro</button>
          </PaymentContainer>
        </BaseContainer>
      </OrderComplement>

      <CartContainer>
        <h2>Cafés selecionados</h2>
        <Cart>
          {cart.map(item => {
            return (<div key={item.product.id}>
              <CartItem >
                <img src={item.product.img_url}/>
                <div>
                  <h3>{item.product.title}</h3>

                  <ItemActions>
                    <div>
                      <QuantityButton onClick={() => RemoveQuantityByOne(item.product.id)}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.53125 7.5C1.53125 7.13756 1.82506 6.84375 2.1875 6.84375H11.8125C12.1749 6.84375 12.4688 7.13756 12.4688 7.5C12.4688 7.86244 12.1749 8.15625 11.8125 8.15625H2.1875C1.82506 8.15625 1.53125 7.86244 1.53125 7.5Z" fill="#8047F8"/>
                        </svg>
                      </QuantityButton>

                      <span>{item.quantity}</span>

                      <QuantityButton onClick={() => AddQuantityByOne(item.product.id)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.53125 7C1.53125 6.63756 1.82506 6.34375 2.1875 6.34375H11.8125C12.1749 6.34375 12.4688 6.63756 12.4688 7C12.4688 7.36244 12.1749 7.65625 11.8125 7.65625H2.1875C1.82506 7.65625 1.53125 7.36244 1.53125 7Z" fill="#8047F8"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M7 1.53125C7.36244 1.53125 7.65625 1.82506 7.65625 2.1875V11.8125C7.65625 12.1749 7.36244 12.4688 7 12.4688C6.63756 12.4688 6.34375 12.1749 6.34375 11.8125V2.1875C6.34375 1.82506 6.63756 1.53125 7 1.53125Z" fill="#8047F8"/>
                        </svg>
                      </QuantityButton>
                    </div>
                    <RemoveButton onClick={() => RemoveProductById(item.product.id)}>
                      <Trash size={16} />
                      Remover
                    </RemoveButton>
                  </ItemActions>
                </div>
                <Price>
                  <FormattedNumber style="currency" currency="BRL" value={item.product.price * item.quantity} />
                </Price>
              </CartItem>

              <Separator />
            </div>)  
          })}

          <TotalizerContainer>
            <TotalizerItem>
              <span>Total de itens</span>
              <span><FormattedNumber style="currency" currency="BRL" value={totalPrice} /></span>
            </TotalizerItem>

            <TotalizerItem>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </TotalizerItem>

            <TotalContent>
              <span>Total</span>
              <span><FormattedNumber style="currency" currency="BRL" value={totalPrice + 3.5} /></span>
            </TotalContent>
          </TotalizerContainer>
          
          <ConfirmOrderButton type="button">Confirmar pedido</ConfirmOrderButton>
        </Cart>
      </CartContainer>
    </CheckoutContainer>
  )
}