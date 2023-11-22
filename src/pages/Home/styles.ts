import styled from "styled-components"

export const HomeContainer = styled.div`

`

export const BannerHero = styled.div`
  height: 34rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme["base-input"]};
`

export const Catalog = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const CatalogTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 2rem;
`

export const ProductList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`

export const ProductCard = styled.div`
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

  h3 {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    text-align: center;
    margin-bottom: auto;
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

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input {
    border: 0;
    background: transparent;
    width: 2rem;
    color: ${props => props.theme["base-title"]};
    text-align: center;
  }

  form > div {
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const Price = styled.p`
  color: ${props => props.theme["base-text"]};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span {
    font-weight: 800;
    font-size: 1.5rem;
  }
`