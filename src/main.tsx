import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import './index.css'
import './scss/common.scss'
import Banner from './student1/Banner'


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
    <Banner>
      
    </Banner>
    </BrowserRouter>       
  </StrictMode>,
)
