import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/app/App'
import './index.scss'
import './sass/App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
