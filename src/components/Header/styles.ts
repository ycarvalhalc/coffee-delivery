import styled from "styled-components"

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    height: 2.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    background: ${props => props.theme["yellow-100"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
`

export const Location = styled.span`
  background: ${props => props.theme["purple-100"]};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme["purple-700"]};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem
`