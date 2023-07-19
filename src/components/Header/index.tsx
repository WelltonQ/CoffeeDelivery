import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="Logo coffee delivery" />
      </Link>
      <nav>
        <div className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </div>
        <Link to={'/checkout'} className="cart">
          <ShoppingCart weight="fill" size={22} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
