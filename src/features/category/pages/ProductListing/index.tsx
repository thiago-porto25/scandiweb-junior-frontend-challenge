import type { ConnectedProps } from 'react-redux'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { LoadingLayout } from '../../../../shared/layouts'
import { Typography } from '../../../../shared/components'

import {
  selectCurrentCategoryProductList,
  selectCurrentCategoryName,
} from '../../store/selectors'
import { getCategoryProductsThunk } from '../../store/thunks'

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
    const { currentCategoryProductList, currentCategoryName } = this.props
    return currentCategoryProductList ? (
      <>
        <HeadingContainer>
          <Typography textStyle='categoryHeading' as='h1'>
            {currentCategoryName}
          </Typography>
        </HeadingContainer>

        <ProductList>
          {currentCategoryProductList.map((product) => (
            <li key={product.id}>
              <div style={{ width: '100%', height: '250px' }}>
                {product.name}
              </div>
            </li>
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
})
const connector = connect(mapStateToProps)

export default connector(ProductListingPage)
