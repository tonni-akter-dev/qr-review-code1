import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { RefProvider } from './RefContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RefProvider>
      <App />
    </RefProvider>
  </BrowserRouter>,
)
