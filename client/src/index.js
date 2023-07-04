import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css'
import App from './App'

const MOUNTED = document.getElementById('root')
const root = createRoot(MOUNTED)

root.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
)
