import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { GlobalLayout } from './shared/layouts'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <Routes>
          <Route path='/' element={<div>category</div>}>
            <Route
              path='category/:categoryName'
              element={<div>category</div>}
            />
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <div />
      </GlobalLayout>
    )
  }
}

export default App
