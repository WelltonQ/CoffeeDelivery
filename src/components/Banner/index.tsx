import { BannerContainer, IconContainer } from './styles'
import { Coffee, ShoppingCart, Package, Timer } from 'phosphor-react'

import coffeeCup from '../../assets/images/coffeeCup.png'

export function Banner() {
  return (
    <BannerContainer>
      <div className="content">
        <div className="intro">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="demonstrative">
            <div className="left">
              <IconContainer className="example" variant="base-yellow-dark">
                <div className="backgroundIcons">
                  <ShoppingCart weight="fill" size={16} color="white" />
                </div>
                <p>Compra simples e segura</p>
              </IconContainer>
              <IconContainer className="example" variant="base-yellow">
                <div className="backgroundIcons">
                  <Timer weight="fill" color="white" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </IconContainer>
            </div>
            <div className="right">
              <IconContainer className="example" variant="base-text">
                <div className="backgroundIcons">
                  <Package weight="fill" color="white" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </IconContainer>
              <IconContainer className="example" variant="base-purple">
                <div className="backgroundIcons">
                  <Coffee weight="fill" color="white" />
                </div>
                <p>O café chega fresquinho até você</p>
              </IconContainer>
            </div>
          </div>
        </div>
        <div>
          <img src={coffeeCup} alt="imagem demonstrativa do copo de café" />
        </div>
      </div>
    </BannerContainer>
  )
}
