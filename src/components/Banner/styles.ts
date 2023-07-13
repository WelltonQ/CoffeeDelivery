import styled from 'styled-components'

import backgroundBanner from '../../assets/images/background-banner.png'

export type IconVariant =
  | 'base-yellow-dark'
  | 'base-yellow'
  | 'base-text'
  | 'base-purple'

interface IconContainerProps {
  variant: IconVariant
}

export const BannerContainer = styled.div`
  width: 100%;
  height: 544px;
  background-image: url(${backgroundBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  padding: 0 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div.intro {
    max-width: 588px;

    h1 {
      font-size: 48px;
      font-weight: bold;
      color: ${({ theme }) => theme['base-title']};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: 'Baloo 2', cursive;
      line-height: 1.2;
    }

    > p {
      font-size: 20px;
      margin-top: 8px;
      margin-bottom: 12px;
    }

    div.demonstrative {
      display: flex;

      .left .right {
        display: flex;
        flex-direction: column;
      }

      .left {
        margin-right: 40px;
      }
    }
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 12px;

  svg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 8px;

    ${(props) => {
      return `
        background-color: ${props.theme[props.variant]};
      `
    }}
  }

  p {
    font-size: 16px;
  }
`
