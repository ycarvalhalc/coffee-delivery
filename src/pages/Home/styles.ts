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