import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// the entry point of the react app is index.tsx, which renders the app component into the root element of the HTML document. 
// the app component is imported from App.tsx, which then imports MyComponent from MyComponent.tsx
// the CSS files are also imported to style the components