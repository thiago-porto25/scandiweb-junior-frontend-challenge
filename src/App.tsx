import React from 'react'
import { connect } from 'react-redux'

import type { IDispatchProp } from './shared/types'
import { GlobalLayout } from './shared/layouts'

import { getCurrenciesThunk } from './features/currency/store/thunks'

class App extends React.Component<IDispatchProp> {
  componentDidMount(): void {
    this.props.dispatch(getCurrenciesThunk())
  }

  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <div />
      </GlobalLayout>
    )
  }
}

export default connect()(App)
