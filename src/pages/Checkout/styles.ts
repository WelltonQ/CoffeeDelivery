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

  @media (max-width: 1120px) {
    display: flex;
    flex-wrap: wrap;

    div {
      width: 100%;
    }
  }
`

const baseCheckout = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
`

export const CheckoutContent = styled(baseCheckout)`
  margin-right: 32px;
  margin-bottom: 12px;

  div {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 8px;
  }
  .iconYellowDark {
    color: ${(props) => props.theme['base-yellow-dark']};
  }
  .iconPurple {
    color: ${(props) => props.theme['base-purple']};
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
    margin-top: 32px;

    .alignRowInputs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;

      .inputWrapper {
        flex: 1;
        position: relative;

        &::after {
          content: 'Opcional';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: ${(props) => props.theme['base-label']};
          font-style: italic;
          font-size: 12px;
        }

        &::after {
          right: 12px;
        }
      }
    }
  }
`

export const CheckoutSummary = styled(baseCheckout)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  width: 448px;

  @media (max-width: 1120px) {
    width: 100%;
    border-radius: 6px;
  }
`

const inputBase = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  display: flex;
  height: 42px;
  padding: 12px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
  }
`

export const Input = styled(inputBase)`
  width: 200px;
`
export const InputFill = styled(inputBase)`
  flex: 1;
`
export const InputUF = styled(inputBase)`
  width: 60px;
`

export const PaymentsMethods = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;

  div {
    background-color: ${(props) => props.theme['base-button']};
    flex: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    border-radius: 6px;
    min-width: 165px;

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['base-purple-dark']};
      }
    }

    svg {
      color: ${(props) => props.theme['base-purple']};
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`
export const CardItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 24px;
  margin-bottom: 24px;

  img {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  div.alignElementsColumn {
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 16px;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
  }
`

export const ItemContent = styled.div`
  display: flex;
  margin-top: 10px;

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 80px;
    height: 32px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    margin-right: 10px;

    p {
      font-size: 14px;
    }

    button {
      color: ${(props) => props.theme['base-purple']};
      background-color: ${(props) => props.theme['base-button']};
      border: none;
      cursor: pointer;
      margin-bottom: -2px;

      &:hover {
        color: ${(props) => props.theme['base-purple-dark']};
      }
    }
  }

  .buttonRemove {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    text-transform: uppercase;
    width: 100px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;

    svg {
      color: ${(props) => props.theme['base-purple']};
      margin-right: 3px;
    }

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['base-purple-dark']};
      }
    }
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 5px;
  }
`

export const PaymentSumary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 16px;
    }
  }

  .paymentTotal {
    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-yellow']};
  color: white;
  margin-top: 24px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['base-yellow-dark']};
  }
`
