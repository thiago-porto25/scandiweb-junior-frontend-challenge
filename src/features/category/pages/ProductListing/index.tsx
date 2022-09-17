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
} from '../../store/selectors'
import { getCategoryProductsThunk } from '../../store/thunks'
import { ProductCard } from '../../components'

import { HeadingContainer, ProductList } from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProductListingPageProps extends PropsFromRedux {
  dispatch: AppDispatch
}

class ProductListingPage extends React.Component<IProductListingPageProps> {
  componentDidUpdate(prevProps: Readonly<IProductListingPageProps>): void {
    const currentCategoryName = this.props.currentCategoryName

    if (
      currentCategoryName &&
      prevProps.currentCategoryName !== currentCategoryName
    ) {
      this.props.dispatch(getCategoryProductsThunk(currentCategoryName))
    }
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
})
const connector = connect(mapStateToProps)

export default connector(ProductListingPage)
