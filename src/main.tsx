import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Banner from './student2/Banner'

import './index.css'
import './scss/common.scss'


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
      <Banner></Banner>
    </BrowserRouter>       
  </StrictMode>,
)
