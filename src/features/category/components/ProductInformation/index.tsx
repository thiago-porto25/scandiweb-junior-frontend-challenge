import React from 'react'
import { connect } from 'react-redux'
import htmlParser from 'html-react-parser'

import type { AppDispatch, IProduct } from '../../../../shared/types'
import {
  AttributeItemsList,
  Button,
  Typography,
} from '../../../../shared/components'

import type { ICurrency } from '../../../currency/types'
import { priceInCurrentCurrency } from '../../../currency/helpers'

import {
  ProductInformationContainer,
  AttributeList,
  ButtonContainer,
  TitleContainer,
} from './styles'
import { addItemToCart } from '../../../cart/store/cart.slice'

interface IAttributeValues {
  value: string
  displayValue: string
}
interface ISelectedInfo {
  id: string
  selectedId: string
}

interface IProductInformationProps {
  product: IProduct
  currentCurrency: ICurrency | null
  dispatch: AppDispatch
}

interface IProductInformationState {
  selectedAttributes: ISelectedInfo[]
}

class ProductInformation extends React.Component<
  IProductInformationProps,
  IProductInformationState
> {
  state = {
    selectedAttributes: [] as ISelectedInfo[],
  }

  componentDidMount(): void {
    this.setState({
      selectedAttributes: this.props.product.attributes.map((attribute) => ({
        id: attribute.id,
        selectedId: attribute.items[0].id,
      })),
    })
  }

  handleAttributeSelect = (attributeId: string, itemId: string): void => {
    this.setState((prevState) => ({
      selectedAttributes: prevState.selectedAttributes.map((attribute) =>
        attribute.id === attributeId
          ? { ...attribute, selectedId: itemId }
          : attribute
      ),
    }))
  }

  findAttributeValues = (attribute: ISelectedInfo): IAttributeValues => {
    const values = this.props.product.attributes
      .find((attr) => attr.id === attribute.id)
      ?.items.find((item) => item.id === attribute.selectedId)

    return { displayValue: values!.displayValue, value: values!.value }
  }

  handleAddToCart = () => {
    this.props.dispatch(
      addItemToCart({
        ...this.props.product,
        quantity: 1,
        selectedAttributes: this.state.selectedAttributes.map((attribute) => ({
          id: attribute.selectedId,
          attributeSetId: attribute.id,
          ...this.findAttributeValues(attribute),
        })),
      })
    )
  }

  render(): React.ReactNode {
    const { product, currentCurrency } = this.props
    return (
      <ProductInformationContainer>
        <TitleContainer>
          <Typography textStyle='brandName' as='h1'>
            {product.name}
          </Typography>

          <Typography textStyle='productTitleLarge' as='span'>
            {product.brand}
          </Typography>
        </TitleContainer>

        <AttributeList>
          {product.attributes.map((attribute) => (
            <li key={attribute.id}>
              <AttributeItemsList
                attribute={attribute}
                selectedId={
                  this.state.selectedAttributes.find(
                    (selectedAttribute) => selectedAttribute.id === attribute.id
                  )?.selectedId || ''
                }
                onSelect={this.handleAttributeSelect}
              />
            </li>
          ))}
        </AttributeList>

        <Typography textStyle='attributeNameRegular' as='h3'>
          PRICE:
        </Typography>

        <Typography
          textStyle='priceLarge'
          as='h4'
          style={{ margin: '12px 0 24px 0' }}
        >
          {priceInCurrentCurrency(product.prices, currentCurrency)}
        </Typography>

        <ButtonContainer>
          <Button onClick={this.handleAddToCart} disabled={!product.inStock}>
            ADD TO CART
          </Button>
        </ButtonContainer>

        {htmlParser(product.description)}
      </ProductInformationContainer>
    )
  }
}

export default connect()(ProductInformation)
