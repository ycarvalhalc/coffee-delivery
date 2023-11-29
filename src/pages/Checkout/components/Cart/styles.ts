import styled from "styled-components"

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const CartContent = styled.div`
  width: 100%;
  background: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
  margin-top: 0.75rem;
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