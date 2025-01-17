import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'
import LogoIgnite from '../../assets/img/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <span><img src={LogoIgnite} alt="" /></span>
      <nav>
        <NavLink to='/' title='Timer'><Timer size={24} /></NavLink>
        <NavLink to='/history' title='Histórico'><Scroll size={24} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}
