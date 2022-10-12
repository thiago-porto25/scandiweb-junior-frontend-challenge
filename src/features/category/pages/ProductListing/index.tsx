import type { RouteComponentProps } from 'react-router-dom'
import type { ConnectedProps } from 'react-redux'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { LoadingLayout } from '../../../../shared/layouts'
import { Typography } from '../../../../shared/components'

import { selectCurrentCurrency } from '../../../currency/store/selectors'

import {
  selectCurrentCategoryProductList,
  selectCurrentCategoryName,
  selectCategoryList,
} from '../../store/selectors'
import { getCategoryProductsThunk } from '../../store/thunks'
import { ProductCard } from '../../components'

import { HeadingContainer, ProductList } from './styles'
import { changeCurrentCategory } from '../../store/category.slice'

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProductListingPageProps
  extends PropsFromRedux,
    RouteComponentProps<{ name?: string }> {
  dispatch: AppDispatch
}

interface IProductListingPageState {
  isRedirected: boolean
}

class ProductListingPage extends React.Component<
  IProductListingPageProps,
  IProductListingPageState
> {
  state = {
    isRedirected: false,
  }

  componentDidMount(): void {
    const categoryNameParam =
      this.props.location.pathname === '/'
        ? 'all'
        : (this.props.match.params?.name as string)

    this.fetchProducts(categoryNameParam)
  }

  componentDidUpdate(prevProps: Readonly<IProductListingPageProps>): void {
    const currentCategoryName = this.props.currentCategoryName
    const currentCategoryProductList = this.props.currentCategoryProductList

    if (
      currentCategoryName &&
      currentCategoryName !== prevProps.currentCategoryName &&
      currentCategoryProductList &&
      currentCategoryProductList.length > 0
    ) {
      this.fetchProducts(currentCategoryName)
      this.redirectWrongCategory()
    }
  }

  redirectWrongCategory = (): void => {
    if (!this.state.isRedirected && this.props.categoryList?.length) {
      const foundCategory = this.props.categoryList?.find((category) => {
        return category.name === this.props.currentCategoryName
      })

      if (!foundCategory) {
        this.setState({ isRedirected: true })
        this.props.dispatch(changeCurrentCategory(this.props.categoryList[0]))
        this.props.history.push('/')
      }
    }
  }

  fetchProducts = (name: string): void => {
    this.props.dispatch(getCategoryProductsThunk(name))
  }

  render(): React.ReactNode {
    const { currentCategoryProductList, currentCategoryName, currentCurrency } =
      this.props

    return currentCategoryProductList ? (
      <>
        <HeadingContainer>
          <Typography textStyle='categoryHeading' as='h1'>
            {currentCategoryName}
          </Typography>
        </HeadingContainer>

        <ProductList>
          {currentCategoryProductList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currentCurrency={currentCurrency}
            />
          ))}
        </ProductList>
      </>
    ) : (
      <LoadingLayout />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currentCategoryName: selectCurrentCategoryName(state),
  currentCategoryProductList: selectCurrentCategoryProductList(state),
  currentCurrency: selectCurrentCurrency(state),
  categoryList: selectCategoryList(state),
})
const connector = connect(mapStateToProps)

export default connector(ProductListingPage)
