import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Nosotros from "../pages/Nosotros"
import Alta from "../pages/Alta"
import ContactUs from "../pages/ContactUs"
import "../styles/main.scss"
import Layout from "../layouts/Layout"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import MensajesRecibidos from "../pages/MensajesRecibidos"
import CardDetail from "../components/CardDetail"

function AppRoutes() {
  return (
    // el route layout es para agregarle header y footer a todas las paginas
    <BrowserRouter> 
        <Routes> 
            <Route element={<Layout />} >  
                <Route index element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/Contacto" element={<ContactUs />} />
                <Route path="/alta" element={<Alta />} />
                <Route path="/MensajesRecibidos" element={<MensajesRecibidos />} />

                <Route path="/category/:category" element={<Products />} />
                <Route path="/products/:id" element={<CardDetail />} />
            </Route>
        </Routes>
    </BrowserRouter> 
    
    
  )
}

export default AppRoutes