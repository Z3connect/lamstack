import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS Imports (Order matters!)
import './styles/variables.css';
import './styles/base.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/navbar.css';
import './styles/buttons.css';
import './styles/cards.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/responsive.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
