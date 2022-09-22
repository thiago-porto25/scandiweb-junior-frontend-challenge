import React from 'react'

import { CartModal } from '../../../features/cart/components'

import { CategoriesList } from '../../../features/category/components'
import { CurrencySwitcher } from '../../../features/currency/components'

import { LogoIcon } from '../../svg'
import { IconsContainer, NavbarContainer } from './styles'

class Navbar extends React.Component {
  render(): React.ReactNode {
    return (
      <NavbarContainer>
        <CategoriesList />
        <LogoIcon />
        <IconsContainer>
          <CurrencySwitcher />
          <CartModal />
        </IconsContainer>
      </NavbarContainer>
    )
  }
}

export default Navbar
