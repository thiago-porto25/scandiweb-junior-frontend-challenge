import React from 'react'

import Portal from '../Portal'

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

class Modal extends React.Component<IModalProps> {
  closeModal = (): void => {
    if (this.props.onClose) this.props.onClose()
    this.props.close()
  }

  render(): React.ReactNode {
    const { isOpen, children, overlayTopMargin } = this.props

    return isOpen ? (
      <Portal>
        <ModalOverlay
          role='dialog'
          aria-label='modal'
          overlayTopMargin={overlayTopMargin}
        >
          <ModalContent closeModal={this.closeModal}>{children}</ModalContent>
        </ModalOverlay>
      </Portal>
    ) : null
  }
}

export default Modal

class ModalContent extends React.Component<IModalContent> {
  handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  componentDidMount(): void {
    document.addEventListener('mousedown', this.props.closeModal)
  }

  componentWillUnmount(): void {
    document.removeEventListener('mousedown', this.props.closeModal)
  }

  render(): React.ReactNode {
    const { children } = this.props
    /**
     * Lint rule disabled because onClick was used to stop click propagation and is not intended for user interaction
     */

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions*/
    return <div onMouseDown={this.handleParentClick}>{children}</div>
  }
}
