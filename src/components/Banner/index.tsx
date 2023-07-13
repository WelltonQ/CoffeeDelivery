import { BannerContainer, IconContainer } from './styles'
import { Coffee, ShoppingCart, Package, Timer } from 'phosphor-react'

import coffeeCup from '../../assets/images/coffeeCup.png'

export function Banner() {
  return (
    <BannerContainer>
      <div className="intro">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="demonstrative">
          <div className="left">
            <IconContainer className="example" variant="base-yellow-dark">
              <ShoppingCart weight="fill" color="white" />
              <p>Compra simples e segura</p>
            </IconContainer>
            <IconContainer className="example" variant="base-yellow">
              <Timer weight="fill" color="white" />
              <p>Entrega rápida e rastreada</p>
            </IconContainer>
          </div>
          <div className="right">
            <IconContainer className="example" variant="base-text">
              <Package weight="fill" color="white" />
              <p>Embalagem mantém o café intacto</p>
            </IconContainer>
            <IconContainer className="example" variant="base-purple">
              <Coffee weight="fill" color="white" />
              <p>O café chega fresquinho até você</p>
            </IconContainer>
          </div>
        </div>
      </div>
      <div>
        <img src={coffeeCup} alt="imagem demonstrativa do copo de café" />
      </div>
    </BannerContainer>
  )
}
