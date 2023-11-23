import styled from "styled-components"

export const CheckoutContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 0.25rem;
  }
`

export const OrderComplement = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const BaseContainer = styled.div`
  width: 100%;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;

  & {
    margin-top: 0.75rem;
  }
`

export const AddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
`

export const AddressHeaderContent = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]}
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]}
  }
`

export const AddressFormContainer = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`

export const GroupInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;

  input:nth-child(2) {
    width: 100%;
  }
`

export const InputBase = styled.input`
  border: 0;
  border-radius: 4px;
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-label"]};
  padding: 0.75rem;
  font-size: 0.875rem;
`

export const InputExtraSmall = styled(InputBase)`
  width: 3.5rem;
`

export const InputSmall = styled(InputBase)`
  width: 12.5rem;
`

export const InputFullWidth = styled(InputBase)`
  width: 100%;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background: ${props => props.theme["base-button"]};
    width: 11.125rem;
    border-radius: 6px;
    padding: 1rem 0;
    color: ${props => props.theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    line-height: 1;
    gap: 0.75rem;

    svg {
      margin-left: 1rem;
      color: ${props => props.theme.purple};
    }
  }
`

export const PaymentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${props => props.theme.purple};
  }
`

export const PaymentHeaderContent = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]}
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]}
  }
`

export const Cart = styled(BaseContainer)`
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
  width: 100%;
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartItem = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  
  & > div {
    display: flex;
    flex-direction: column;
    margin-right: auto;
  }

  h3 {
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  img {
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0.375rem 0.5rem;
    gap: 0.25rem;
    width: 4.5rem;
  }

  button {

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme["base-button"]};
  border-radius: 6px;
  border: 0;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1;

  svg {
    color: ${props => props.theme.purple};
  }
`

export const Price = styled.p`
`

export const Separator = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: ${props => props.theme["base-button"]};
  margin: 1.5rem 0;
`

export const ConfirmOrderButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme["yellow"]};
  color: ${props => props.theme.white};
  width: 100%;
  border-radius: 6px;
  padding: 0.75rem 0;
`

export const TotalizerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  div {
    
  }
`

export const TotalizerItem = styled.div`
  display: flex;
  justify-content: space-between;

  span:first-child() {
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};
  }

  span:last-child() {
    color: ${props => props.theme["base-text"]};
  }
`

export const TotalContent = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: bold;
  }
`