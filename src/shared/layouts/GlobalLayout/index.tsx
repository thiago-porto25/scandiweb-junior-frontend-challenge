import React from 'react'

import { CurrencySwitcher } from '../../../features/currency/components'

import { Container } from '../../components'

interface iGlobalLayoutProps {
  children: React.ReactNode
}

class GlobalLayout extends React.Component<iGlobalLayoutProps> {
  render(): React.ReactNode {
    return (
      <>
        <Container>
          {/* TODO: Exchange div with Navbar component when it's created */}
          <div style={{ width: '100%', height: '80px' }}>
            <CurrencySwitcher />
          </div>
        </Container>

        <Container>{this.props.children}</Container>
      </>
    )
  }
}

export default GlobalLayout
