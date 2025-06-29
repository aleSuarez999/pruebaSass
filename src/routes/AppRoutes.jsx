import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Nosotros from "../pages/Nosotros"
import Alta from "../pages/Alta"
import Contacto from "../pages/Contacto"
import "../styles/main.scss"

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/alta" element={<Alta />} />
        </Routes>
    </BrowserRouter> 
    
    
  )
}

export default AppRoutes