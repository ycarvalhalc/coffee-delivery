import styled from "styled-components"

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  cursor: pointer;
`

export const BuyButton = styled.button`
  background: ${props => props.theme["purple-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${props => props.theme["base-card"]};
  }
`