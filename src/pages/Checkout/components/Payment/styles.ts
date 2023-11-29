import styled from "styled-components"

export const PaymentContainer = styled.div`
  width: 100%;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const PaymentSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

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
    cursor: pointer;

    svg {
      margin-left: 1rem;
      color: ${props => props.theme.purple};
    }

    &[data-state="true"] {
      background: ${props => props.theme["purple-light"]};
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