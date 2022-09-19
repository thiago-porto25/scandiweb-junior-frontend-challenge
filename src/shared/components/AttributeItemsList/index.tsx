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
}

class AttributeItemsList extends React.Component<IAttributeItemsListProps> {
  render() {
    const { attribute, selectedId, onSelect } = this.props
    return (
      <AttributeItemsListContainer>
        <Typography textStyle='attributeNameRegular'>
          {attribute.name}:
        </Typography>

        <List>
          {attribute.items.map((item) => (
            <li key={item.id}>
              {attribute.type === 'swatch' ? (
                <Color
                  colorValue={item.value}
                  selected={selectedId === item.id}
                  onClick={() => onSelect(attribute.id, item.id)}
                />
              ) : (
                <ButtonContainer>
                  <Button
                    variant='secondary'
                    selected={selectedId === item.id}
                    onClick={() => onSelect(attribute.id, item.id)}
                  >
                    <Typography textStyle='sizeAttributeRegular' as='span'>
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
