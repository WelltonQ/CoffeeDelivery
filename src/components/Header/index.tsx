import { HeaderContainer } from './styles'

import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/images/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo coffee delivery" />
      <nav>
        <div className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </div>
        <div className="cart">
          <ShoppingCart weight="fill" size={22} />
        </div>
      </nav>
    </HeaderContainer>
  )
}
