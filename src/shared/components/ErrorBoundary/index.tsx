import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { selectCategoryIsError } from '../../../features/category/store/selectors'
import { selectCurrencyIsError } from '../../../features/currency/store/selectors'

import type { RootState } from '../../types'
import { LogoIcon } from '../../svg'
import { Button } from '../Button'
import { Typography } from '../Typography'

import {
  ButtonContainer,
  ErrorBoundaryContainer,
  LogoContainer,
} from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface IErrorBoundaryProps extends PropsFromRedux {
  children: React.ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: !!error }
  }

  render() {
    if (
      this.state.hasError ||
      this.props.hasCategoryError ||
      this.props.hasCurrencyError
    ) {
      return (
        <ErrorBoundaryContainer>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>

          <Typography textStyle='categoryHeading' as='h1'>
            Oops... something went wrong!
          </Typography>

          <Typography textStyle='category' as='p'>
            We have encountered an error and we are sorry for the inconvenience.
          </Typography>

          <ButtonContainer>
            <Button onClick={() => location.reload()}>Reload Page</Button>
          </ButtonContainer>
        </ErrorBoundaryContainer>
      )
    }

    return this.props.children
  }
}

const mapStateToProps = (state: RootState) => ({
  hasCurrencyError: selectCurrencyIsError(state),
  hasCategoryError: selectCategoryIsError(state),
})
const connector = connect(mapStateToProps)

export default connector(ErrorBoundary)
