import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { client } from '@tilework/opus'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { store } from './store'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { ErrorBoundary } from './shared/components'

client.setEndpoint('http://localhost:4000')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
