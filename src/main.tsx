import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { IntlProvider } from 'react-intl'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale="pt-BR">
      <App />
    </IntlProvider>
  </React.StrictMode>,
)
