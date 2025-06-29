import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/main.scss'
import './sass/layout/_index.scss'

import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
