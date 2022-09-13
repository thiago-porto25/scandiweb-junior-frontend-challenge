import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { client } from '@tilework/opus'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { store, persistor } from './store'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'

import { LoadingLayout } from './shared/layouts/LoadingLayout'
import { ErrorBoundary } from './shared/components'

client.setEndpoint('http://localhost:4000')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingLayout />} persistor={persistor}>
          <ErrorBoundary>
            <Router>
              <App />
            </Router>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
