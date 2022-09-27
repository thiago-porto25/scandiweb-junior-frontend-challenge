import React from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
}

class Portal extends React.Component<IPortalProps> {
  portalRoot = document.querySelector('body') as HTMLElement
  container = (() => {
    const portal = document.createElement('div')
    portal.style.overflow = 'auto'
    portal.style.position = 'absolute'
    portal.style.left = '0'
    portal.style.top = '0'
    portal.style.right = '0'
    portal.style.bottom = '0'
    portal.id = 'app-portal'

    return portal
  })()

  componentDidMount(): void {
    this.portalRoot.appendChild(this.container)
  }

  componentWillUnmount(): void {
    this.container.remove()
  }

  render(): React.ReactNode {
    return createPortal(this.props.children, this.container)
  }
}

export default Portal
