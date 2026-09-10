import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './JsonEditor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App className="jsoneditor"/>
  </StrictMode>,
)
