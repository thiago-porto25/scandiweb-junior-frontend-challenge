import React from 'react'

import Portal from '../Portal'
import { Typography } from '../Typography'

import { ToastContainer } from './styles'

interface IToastProps {
  text: string
  isOpen: boolean
  duration: number
  close: () => void
  onClose?: () => void
}

interface IToastState {
  timeoutId: NodeJS.Timeout | null
}

class Toast extends React.Component<IToastProps, IToastState> {
  state = {
    timeoutId: null,
  }

  componentDidUpdate(prevProps: Readonly<IToastProps>): void {
    if (this.props.isOpen && !prevProps.isOpen) {
      document.addEventListener('mousedown', this.closeToast)
      this.startTimer()
    }

    if (!this.props.isOpen && prevProps.isOpen) {
      this.cleanup()
    }
  }

  componentWillUnmount(): void {
    this.cleanup()
  }

  cleanup = (): void => {
    const { timeoutId } = this.state
    document.removeEventListener('mousedown', this.closeToast)
    if (timeoutId) clearTimeout(timeoutId)
  }

  startTimer = (): void => {
    const { duration } = this.props
    const timeoutId = setTimeout(this.closeToast, duration)
    this.setState({ timeoutId })
  }

  closeToast = (): void => {
    if (this.props.onClose) this.props.onClose()
    this.props.close()
  }

  render(): React.ReactNode {
    const { isOpen, text } = this.props

    return isOpen ? (
      <Portal>
        <ToastContainer role='dialog' aria-label='toast message'>
          <Typography textStyle='productTitleRegular' fontWeight={500}>
            {text}
          </Typography>
        </ToastContainer>
      </Portal>
    ) : null
  }
}

export default Toast
