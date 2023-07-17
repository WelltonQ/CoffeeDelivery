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

  display: flex;
  justify-content: space-between;
  align-items: center;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;

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
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 12px;

  .backgroundIcons {
    background-color: ${(props) => props.theme[props.variant]};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 16px;
  }
`
