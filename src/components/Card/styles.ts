import styled from "styled-components"

export const Container = styled.div`
  height: 310px;
  max-width: 256px;  
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background: ${props => props.theme["base-card"]};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.25rem 1.25rem;

  img {
    height: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme["yellow-light"]};
    border-radius: 100px;
    color: ${props => props.theme["yellow-dark"]};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const Title = styled.h3`
  color: ${props => props.theme["base-subtitle"]};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme["base-label"]};
  text-align: center;
  margin-bottom: auto;
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Price  = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-text"]};
  }

  span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme }) => theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
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