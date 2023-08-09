import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 20px 40px;

  div {
    width: 100%;

    h1 {
      color: ${(props) => props.theme['base-yellow-dark']};
      margin-bottom: 10px;
    }
  }
`

export const ContentSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .summary {
    width: 526px;
    border: 1px solid #dbac2c;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    padding: 40px;
    margin-top: 40px;
  }
`
