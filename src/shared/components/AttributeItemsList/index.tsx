import React from 'react'

import type { IAttributeSet } from '../../types'
import { Button } from '../Button'
import { Color } from '../Color'
import { Typography } from '../Typography'

import { AttributeItemsListContainer, List, ButtonContainer } from './styles'

interface IAttributeItemsListProps {
  attribute: IAttributeSet
  selectedId: string
  onSelect: (attributeId: string, itemId: string) => void
  isSmall?: boolean
}

class AttributeItemsList extends React.Component<IAttributeItemsListProps> {
  render() {
    const { attribute, selectedId, onSelect, isSmall } = this.props

    return (
      <AttributeItemsListContainer>
        <Typography
          textStyle={isSmall ? 'quantityRegular' : 'attributeNameRegular'}
        >
          {attribute.name}:
        </Typography>

        <List isSmall={isSmall}>
          {attribute.items.map((item) => (
            <li key={item.id}>
              {attribute.type === 'swatch' ? (
                <Color
                  colorValue={item.value}
                  selected={selectedId === item.id}
                  onClick={() => onSelect(attribute.id, item.id)}
                  small={isSmall}
                />
              ) : (
                <ButtonContainer isSmall={isSmall}>
                  <Button
                    variant='secondary'
                    selected={selectedId === item.id}
                    onClick={() => onSelect(attribute.id, item.id)}
                  >
                    <Typography
                      textStyle={
                        isSmall ? 'sizeAttributeSmall' : 'sizeAttributeRegular'
                      }
                      as='span'
                    >
                      {item.value}
                    </Typography>
                  </Button>
                </ButtonContainer>
              )}
            </li>
          ))}
        </List>
      </AttributeItemsListContainer>
    )
  }
}
export default AttributeItemsList
