import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'
import map from '../../assets/icons/map-pin-fill.svg'
import cart from '../../assets/icons/shopping-cart-fill.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo coffee delivery" />
      <div>
        <img src={map} alt="Localização" />
        <span>Porto Alegre, RS</span>
      </div>
      <div>
        <img src={cart} alt="Carrinho de compras" />
      </div>
    </HeaderContainer>
  )
}
