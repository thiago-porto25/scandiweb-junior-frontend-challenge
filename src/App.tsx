import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { GlobalLayout } from './shared/layouts'

const ProductListingPage = React.lazy(
  () => import('./features/category/pages/ProductListing')
)

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <Routes>
          <Route path='/' element={<ProductListingPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <div />
      </GlobalLayout>
    )
  }
}

export default App
