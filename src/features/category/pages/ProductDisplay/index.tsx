import type { ConnectedProps } from 'react-redux'
import type { RouteComponentProps } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { LoadingLayout } from '../../../../shared/layouts'

import { selectCurrentCurrency } from '../../../currency/store/selectors'

import { resetDisplayProduct } from '../../store/category.slice'
import {
  selectDisplayProduct,
  selectCategoryStatus,
} from '../../store/selectors'
import { getDisplayProductThunk } from '../../store/thunks'
import { ProductImagesDisplay, ProductInformation } from '../../components'

import { PageContainer } from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface IPathParams {
  id: string
}

interface IProductDisplayPageProps
  extends PropsFromRedux,
    RouteComponentProps<IPathParams> {
  dispatch: AppDispatch
}

interface IProductDisplayPageState {
  isRedirected: boolean
}

class ProductDisplayPage extends React.Component<
  IProductDisplayPageProps,
  IProductDisplayPageState
> {
  state = {
    isRedirected: false,
  }

  componentDidMount(): void {
    const id = this.props.match.params.id

    this.props.dispatch(getDisplayProductThunk(id))
  }

  componentDidUpdate(): void {
    this.redirectWrongCategory()
  }

  componentWillUnmount(): void {
    this.props.dispatch(resetDisplayProduct())
  }

  redirectWrongCategory = (): void => {
    if (
      !this.state.isRedirected &&
      !this.props.displayProduct &&
      this.props.status === 'succeeded'
    ) {
      this.setState({ isRedirected: true })
      this.props.history.push('/')
    }
  }

  render(): React.ReactNode {
    const { currentCurrency, displayProduct } = this.props

    return displayProduct ? (
      <PageContainer>
        <ProductImagesDisplay
          name={displayProduct.name}
          brand={displayProduct.brand}
          gallery={displayProduct.gallery}
        />
        <ProductInformation
          product={displayProduct}
          currentCurrency={currentCurrency}
        />
      </PageContainer>
    ) : (
      <LoadingLayout />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  displayProduct: selectDisplayProduct(state),
  currentCurrency: selectCurrentCurrency(state),
  status: selectCategoryStatus(state),
})
const connector = connect(mapStateToProps)

export default connector(ProductDisplayPage)
