import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Matinal from "./routes/Matinal.jsx";
import Refeicoes from "./routes/Refeicoes.jsx";
import HappyHour from "./routes/HappyHour.jsx";
import Finalizar from "./routes/Finalizar.jsx";
import { PedidoProvider } from './routes/PedidoContext.jsx';
import "./routes/Menu.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PedidoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matinal" element={<Matinal />} />
          <Route path="/refeicoes" element={<Refeicoes />} />
          <Route path="/happyhour" element={<HappyHour />} />
          <Route path="/finalizar" element={<Finalizar />} />
        </Routes>
      </BrowserRouter>
    </PedidoProvider>
  </React.StrictMode>,
);
