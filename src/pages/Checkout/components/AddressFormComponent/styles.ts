import styled from "styled-components"

export const AddressFormContainer = styled.div`
  width: 100%;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
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

export const FormContainer = styled.div`
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