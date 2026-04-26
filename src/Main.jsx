import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SmartPlusParkingApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmartPlusParkingApp />
  </StrictMode>,
)