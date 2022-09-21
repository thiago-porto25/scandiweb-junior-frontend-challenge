import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalLayout } from './shared/layouts'

const ProductListingPage = React.lazy(
  () => import('./features/category/pages/ProductListing')
)

const ProductDisplayPage = React.lazy(
  () => import('./features/category/pages/ProductDisplay')
)

const CartPage = React.lazy(() => import('./features/cart/pages/Cart'))

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <Switch>
          <Route path='/product/:id' component={ProductDisplayPage} />
          <Route path='/cart' component={CartPage} />
          <Route exact path='/' component={ProductListingPage} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </GlobalLayout>
    )
  }
}

export default App
