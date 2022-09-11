import React from 'react'
import { Container } from '../../components'

interface iGlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout = ({ children }: iGlobalLayoutProps) => {
  return (
    <>
      <Container>
        {/* TODO: Exchange div with Navbar component when it's created */}
        <div style={{ width: '100%', height: '80px', background: 'black' }} />
      </Container>
      <Container>{children}</Container>
    </>
  )
}
