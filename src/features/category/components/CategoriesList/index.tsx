import React from 'react'
import {
  Link,
  RouteComponentProps,
  withRouter,
  matchPath,
} from 'react-router-dom'
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

interface IPathParams {
  name: string | undefined
}

interface ICategoriesListProps
  extends PropsFromRedux,
    RouteComponentProps<IPathParams> {
  dispatch: AppDispatch
}

class CategoriesList extends React.Component<ICategoriesListProps> {
  componentDidMount(): void {
    if (!this.props.categoryList) this.props.dispatch(getCategoriesThunk())
    this.initializeCategoryList()
  }

  initializeCategoryList(): void {
    const match = matchPath<IPathParams>(this.props.history.location.pathname, {
      path: '/category/:name',
      exact: true,
      strict: false,
    })

    if (match) {
      const name = match.params.name

      if (name) {
        this.changeSelectedCategory({ name })
      }
    }
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
                  to={
                    /all/i.test(category.name)
                      ? '/'
                      : `/category/${category.name}`
                  }
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

export default withRouter(connector(CategoriesList))
