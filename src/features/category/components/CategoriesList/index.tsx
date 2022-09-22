import React from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { Typography } from '../../../../shared/components'

import type { GetAllCategoriesResponse } from '../../types'
import { changeCurrentCategory } from '../../store/category.slice'
import { getCategoriesThunk } from '../../store/thunks'
import {
  selectCategoryList,
  selectCurrentCategoryName,
} from '../../store/selectors'

import { List, Nav } from './styles'

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
      <Nav>
        {categoryList?.length && (
          <List>
            {categoryList.map((category, i) => (
              <li key={`${category.name}-${i}`}>
                <Link
                  to='/'
                  onClick={() => {
                    this.changeSelectedCategory(category)
                  }}
                  className={
                    'category-item' +
                    (currentCategoryName === category.name ? ' activated' : '')
                  }
                >
                  <Typography textStyle='category'>{category.name}</Typography>
                </Link>
              </li>
            ))}
          </List>
        )}
      </Nav>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  categoryList: selectCategoryList(state),
  currentCategoryName: selectCurrentCategoryName(state),
})
const connector = connect(mapStateToProps)

export default connector(CategorySwitcher)
