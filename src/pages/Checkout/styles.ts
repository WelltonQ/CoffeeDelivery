import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1140px;
  margin: 40px auto;

  div {
    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Baloo 2';
      font-size: 18px;
      margin-bottom: 15px;
    }
  }

  .completedOrder {
    flex: 1;
  }
`

const baseCheckout = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
`

export const CheckoutContent = styled(baseCheckout)`
  margin-right: 32px;

  div {
    display: flex;
    align-items: center;
  }
  svg {
    color: ${(props) => props.theme['base-yellow-dark']};
    margin-right: 8px;
  }
  .alignTexts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 16px;
    }
    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 14px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const CheckoutSummary = styled(baseCheckout)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  width: 448px;
`

const inputBase = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  display: flex;
  height: 42px;
  padding: 12px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Input = styled(inputBase)`
  width: 200px;
`
export const InputFill = styled(inputBase)``
export const InputUF = styled(inputBase)``
