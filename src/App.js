import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './views/Productos';
import Home from './views/Home';
import DetalleProd from './components/detalleProd';
import { ContextProvider } from './Context';
import QuienesSomos from './views/QuienesSomos';
import Carrito from './views/Carrito';
import Contacto from './views/Contacto';


function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/detalle/:id" element={<DetalleProd />} />
              <Route path="quienes-somos" element={<QuienesSomos />} />
              <Route path="carrito-de-compras" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}


export default App;
