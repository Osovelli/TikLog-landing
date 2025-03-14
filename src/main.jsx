import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './lib/ModalContext.jsx'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
    </HelmetProvider>
  </StrictMode>,
)
