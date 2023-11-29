import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { PaymentContainer, PaymentHeader, PaymentHeaderContent, PaymentSelection } from "./styles";
import { useCart } from "../../../../hooks/useCart";

type PaymentMethod = "credit" | "debit" | "cash"

export function Payment() {
  const { order, addPaymentMethod } = useCart()

  function handlePaymentSelection(type: PaymentMethod) {
    addPaymentMethod(type)
  }

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22}/>
        <PaymentHeaderContent>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </PaymentHeaderContent>
      </PaymentHeader>

      <PaymentSelection>
        <button 
          type="button" 
          onClick={() => handlePaymentSelection("credit")}
          data-state={order.paymentMethod === "credit"}
        >
          <CreditCard size={16} /> 
          cartão de crédito
        </button>


        <button 
          type="button" 
          onClick={() => handlePaymentSelection("debit")}
          data-state={order.paymentMethod === "debit"}
        >
          <Bank size={16} />
          cartão de débito
        </button>

        <button 
          type="button" 
          onClick={() => handlePaymentSelection("cash")}
          data-state={order.paymentMethod === "cash"}
        >
          <Money size={16} />
          dinheiro
        </button>
      </PaymentSelection>
    </PaymentContainer>
  )
}