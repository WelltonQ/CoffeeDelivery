import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 104px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    .location {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme['base-purple-light']};
      border-radius: 6px;
      padding: 8px 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      svg {
        margin-right: 4px;
        color: ${(props) => props.theme['base-purple']};
      }

      span {
        color: ${(props) => props.theme['base-purple-dark']};
      }
    }

    .cart {
      display: flex;
      border-radius: 6px;
      padding: 8px 10px;
      background-color: ${(props) => props.theme['base-yellow-light']};
      cursor: pointer;
      border: none;

      svg {
        color: ${(props) => props.theme['base-yellow-dark']};
      }
    }
  }
`
