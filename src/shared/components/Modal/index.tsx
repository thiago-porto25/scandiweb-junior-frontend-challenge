import React from 'react'

import { Portal } from '../Portal'

import { ModalOverlay } from './styles'

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
  onClose?: () => void
  rootId?: string
}

export const Modal = ({
  rootId,
  isOpen,
  close,
  onClose,
  children,
}: IModalProps) => {
  const closeModal = (): void => {
    if (onClose) onClose()
    close()
  }

  const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return isOpen ? (
    <Portal rootId={rootId}>
      <ModalOverlay role='dialog' aria-label='modal' onClick={closeModal}>
        {/**
         * Lint rule disabled because onClick was used to stop click propagation and is not intended for user interaction
         */
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions*/}
        <div onClick={handleParentClick}>{children}</div>
      </ModalOverlay>
    </Portal>
  ) : null
}
