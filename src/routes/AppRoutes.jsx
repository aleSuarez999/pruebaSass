import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Nosotros from "../pages/Nosotros"
import Alta from "../pages/Alta"
import Contacto from "../pages/Contacto"
import "../styles/main.scss"
import Layout from "../layouts/Layout"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"

function AppRoutes() {
  return (
    // el route layout es para agregarle header y footer a todas las paginas
    <BrowserRouter> 
        <Routes> 
            <Route element={<Layout />} >  
                <Route index element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/alta" element={<Alta />} />

                <Route path="/products/:category" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
        </Routes>
    </BrowserRouter> 
    
    
  )
}

export default AppRoutes