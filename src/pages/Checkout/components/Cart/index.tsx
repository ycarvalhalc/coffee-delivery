import { FormattedNumber } from "react-intl"
import { Trash } from "phosphor-react"
import { 
  CartContainer,
  CartItem, 
  ItemActions, 
  RemoveButton,
  Price, 
  Separator, 
  TotalizerContainer, 
  TotalizerItem, 
  TotalContent, 
  ConfirmOrderButton, 
  CartContent 
} from "./styles"
import { useCart } from "../../../../hooks/useCart"
import { QuantityInput } from "../../../../components/Form/QuantityInput"


export function Cart() {
  const { cart, removeItem, incrementItemQuantity, decrementItemQuantity } = useCart()

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const totalPrice = cart.reduce((total, currentValue) => {
    return total += (currentValue.quantity * currentValue.product.price)
  }, 0)
  
  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CartContent>
        {cart.map(item => {
          return (<div key={item.product.id}>
            <CartItem >
              <img src={item.product.img_url}/>
              <div>
                <h3>{item.product.title}</h3>

                <ItemActions>
                  <div>
                    <QuantityInput 
                      quantity={item.quantity}
                      incrementQuantity={() => handleItemIncrement(item.product.id)}
                      decrementQuantity={() => handleItemDecrement(item.product.id)}
                    />
                  </div>
                  <RemoveButton onClick={() => handleItemRemove(item.product.id)}>
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
        
        <ConfirmOrderButton type="submit" form="order" >Confirmar pedido</ConfirmOrderButton>
      </CartContent>
    </CartContainer>
  )
}