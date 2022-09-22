import React from 'react'

import { Container, Navbar } from '../../components'

interface iGlobalLayoutProps {
  children: React.ReactNode
}

class GlobalLayout extends React.Component<iGlobalLayoutProps> {
  render(): React.ReactNode {
    return (
      <>
        <Container>
          <Navbar />
        </Container>

        <Container takesAvailableSpace>{this.props.children}</Container>
      </>
    )
  }
}

export default GlobalLayout
