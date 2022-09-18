import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalLayout } from './shared/layouts'

const ProductListingPage = React.lazy(
  () => import('./features/category/pages/ProductListing')
)

const ProductDisplayPage = React.lazy(
  () => import('./features/category/pages/ProductDisplay')
)

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <Switch>
          <Route path='/product/:id' component={ProductDisplayPage} />
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
