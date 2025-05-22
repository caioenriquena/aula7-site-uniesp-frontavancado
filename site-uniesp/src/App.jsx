import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'

const App = () => {
  return (
   <BrowserRouter>
      <Navbar/>
      <Container className="md-4">
        <Routes>
          <Route path="/" element= {<Inicial/>} />
          <Route path="/a-faculdade" element={<Faculdade/>}/>
          <Route path = "/dpo-lgpd" element={<DpoLgpd/>}/>
        </Routes>
      </Container>
   </BrowserRouter>
  )
}

export default App