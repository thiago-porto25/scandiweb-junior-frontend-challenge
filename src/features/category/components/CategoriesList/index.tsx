import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { Button, Typography } from '../../../../shared/components'

import type { GetAllCategoriesResponse } from '../../types'
import { changeCurrentCategory } from '../../store/category.slice'
import { getCategoriesThunk } from '../../store/thunks'
import {
  selectCategoryList,
  selectCurrentCategoryName,
} from '../../store/selectors'

import { List } from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICategorySwitcherProps extends PropsFromRedux {
  dispatch: AppDispatch
}

class CategorySwitcher extends React.Component<ICategorySwitcherProps> {
  componentDidMount(): void {
    this.props.dispatch(getCategoriesThunk())
  }

  changeSelectedCategory = (category: GetAllCategoriesResponse): void => {
    this.props.dispatch(changeCurrentCategory(category))
  }

  render(): React.ReactNode {
    const { categoryList, currentCategoryName } = this.props

    return (
      <nav>
        {categoryList?.length && (
          <List>
            {categoryList.map((category, i) => (
              <li key={`${category.name}-${i}`}>
                <Button
                  variant='ghost'
                  onClick={() => {
                    this.changeSelectedCategory(category)
                  }}
                  className={
                    'category-item' +
                    (currentCategoryName === category.name ? ' activated' : '')
                  }
                >
                  <Typography textStyle='category'>{category.name}</Typography>
                </Button>
              </li>
            ))}
          </List>
        )}
      </nav>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  categoryList: selectCategoryList(state),
  currentCategoryName: selectCurrentCategoryName(state),
})
const connector = connect(mapStateToProps)

export default connector(CategorySwitcher)
