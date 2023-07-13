import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 104px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

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

      svg {
        color: ${(props) => props.theme['base-yellow-dark']};
      }
    }
  }
`
