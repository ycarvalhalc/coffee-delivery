import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.background};
`

export const Nav = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem;
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
    background: ${props => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    span {
      background: ${props => props.theme["yellow-dark"]};
      color: ${props => props.theme.white};
      font-size: 0.75rem;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
    }

    svg {
      color: ${props => props.theme["yellow-dark"]}
    }
  }
`

export const Location = styled.span`
  background: ${props => props.theme["purple-light"]};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme["purple-dark"]};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${props => props.theme["purple"]};
  }
`