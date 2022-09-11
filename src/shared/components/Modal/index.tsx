import React, { useEffect } from 'react'

import { Portal } from '../Portal'

import { ModalOverlay } from './styles'

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
  onClose?: () => void
  overlayTopMargin: number
}

interface IModalContent {
  children: React.ReactNode
  closeModal: () => void
}

export const Modal = ({
  isOpen,
  overlayTopMargin = 0,
  close,
  onClose,
  children,
}: IModalProps) => {
  const closeModal = (): void => {
    if (onClose) onClose()
    close()
  }

  return isOpen ? (
    <Portal>
      <ModalOverlay
        role='dialog'
        aria-label='modal'
        overlayTopMargin={overlayTopMargin}
      >
        <ModalContent closeModal={closeModal}>{children}</ModalContent>
      </ModalOverlay>
    </Portal>
  ) : null
}

const ModalContent = ({ closeModal, children }: IModalContent) => {
  const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeModal)

    return () => {
      document.removeEventListener('mousedown', closeModal)
    }
  }, [closeModal])

  /**
   * Lint rule disabled because onClick was used to stop click propagation and is not intended for user interaction
   */

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable-next-line jsx-a11y/no-static-element-interactions*/
  return <div onMouseDown={handleParentClick}>{children}</div>
}
