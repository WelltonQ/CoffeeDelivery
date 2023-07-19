import styled from 'styled-components'

export const CardMenu = styled.div`
  background: ${(props) => props.theme['base-card']};
  height: 310px;
  width: 256px;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }

  .taste {
    margin: 10px 0;
    display: flex;
    gap: 4px;

    span {
      background-color: ${(props) => props.theme['base-yellow-light']};
      color: ${(props) => props.theme['base-yellow-dark']};
      padding: 5px 7px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  .title {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    font-family: 'Baloo 2';
  }

  .description {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    text-align: center;
    margin: 7px 0 15px;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .coin {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    margin-right: 3px;
  }

  .price {
    color: ${(props) => props.theme['base-text']};
    font-size: 24px;
    font-family: 'Baloo 2';
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 72px;
    height: 38px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    margin: 0 10px;

    button {
      color: ${(props) => props.theme['base-purple']};
      background-color: ${(props) => props.theme['base-button']};
      border: none;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['base-purple-dark']};
      }
    }
  }

  .cart {
    background-color: ${(props) => props.theme['base-purple-dark']};
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-purple']};
    }
  }
`
