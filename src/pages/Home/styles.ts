import styled from 'styled-components'

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 20px 40px;

  h2 {
    margin: 40px 0;
  }

  @media (max-width: 1160px) {
    align-items: center;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 25px;

  @media (max-width: 1160px) {
    justify-content: center;
  }
`
