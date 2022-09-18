import type { ConnectedProps } from 'react-redux'
import type { RouteComponentProps } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { LoadingLayout } from '../../../../shared/layouts'
import { Typography } from '../../../../shared/components'

import { selectCurrentCurrency } from '../../../currency/store/selectors'

import { selectDisplayProduct } from '../../store/selectors'
import { PageContainer } from './styles'
import { getDisplayProductThunk } from '../../store/thunks'

type PropsFromRedux = ConnectedProps<typeof connector>

interface IPathParams {
  id: string
}

interface IProductDisplayPageProps
  extends PropsFromRedux,
    RouteComponentProps<IPathParams> {
  dispatch: AppDispatch
}

class ProductDisplayPage extends React.Component<IProductDisplayPageProps> {
  componentDidMount(): void {
    const id = this.props.match.params?.id

    if (id) this.props.dispatch(getDisplayProductThunk(id))
  }

  render(): React.ReactNode {
    const { currentCurrency, displayProduct } = this.props

    return displayProduct ? (
      <PageContainer>{displayProduct.brand}</PageContainer>
    ) : (
      <LoadingLayout />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  displayProduct: selectDisplayProduct(state),
  currentCurrency: selectCurrentCurrency(state),
})
const connector = connect(mapStateToProps)

export default connector(ProductDisplayPage)
