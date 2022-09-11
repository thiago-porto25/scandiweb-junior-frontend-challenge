import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
  rootId?: string
}

export const Portal = ({ rootId, children }: IPortalProps) => {
  const portalRoot = document.querySelector(rootId || 'body') as HTMLElement

  const container = useMemo(() => {
    const portal = document.createElement('div')
    portal.style.overflow = 'auto'
    portal.style.position = 'absolute'
    portal.style.left = '0'
    portal.style.top = '0'
    portal.style.right = '0'
    portal.style.bottom = '0'
    portal.id = 'cart-portal'

    return portal
  }, [])

  useEffect(() => {
    portalRoot.appendChild(container)

    return () => {
      container.remove()
    }
  }, [portalRoot, container])

  return createPortal(children, container)
}
