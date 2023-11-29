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