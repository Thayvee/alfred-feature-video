import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Sos from './components/sos/Sos';
import LlamadaSOS from './components/sos/llamada/LlamadaSOS';
import AyudaEnCaminoSOS from './components/sos/ayuda/AyudaEnCamino';
import Home from './components/home/Home';
import Salud from './components/salud/Salud';
import LlamadaSalud from './components/salud/llamada/LlamadaSalud';
import AyudaEnCamino from './components/salud/ayuda/AyudaEnCamino';
import Juegos from './components/juegos/Juegos';
import Filtros from './components/filtros/Filtros';
import Parking from './components/parking/Parking';
import Movilidad from './components/movilidad/Movilidad';
import Mapa from './components/movilidad/mapa/Mapa';
import MB from './components/movilidad/mb/MB';
import MB01 from './components/movilidad/mb01/MB01';
import MB02 from './components/movilidad/mb02/MB02';
import RST from './components/movilidad/rst/RST';
import RST01 from './components/movilidad/rst01/RST01';
import RST02 from './components/movilidad/rst02/RST02';
import RST03 from './components/movilidad/rst03/RST03';
import BNC from './components/movilidad/bnc/BNC';
import BNC01 from './components/movilidad/bnc01/BNC01';
import PKN from './components/movilidad/pkn/PKN';
import PKN01 from './components/movilidad/pkn01/PKN01';
import NacionDeportes from './components/nacion-deportes/NacionDeportes';
import Entretenimiento from './components/entretenimiento/Entretenimiento';

const routing = (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/salud" element={<Salud/>} >
        <Route index element={<LlamadaSalud />} />
        <Route path='ayuda-en-camino' element={<AyudaEnCamino />} />
      </Route>
    </Routes>
    <Routes>
      <Route path="/sos" element={<Sos/>}>
        <Route index element={<LlamadaSOS />} />
        <Route path='ayuda-en-camino' element={<AyudaEnCaminoSOS />} />
      </Route>
    </Routes>
    <Routes>
      <Route exact path="/movilidad" element={<Movilidad/>} >
        <Route index element={<Mapa />} />
        <Route path='estaciones-de-metrobus' element={<MB />} />
        <Route path='mb-teatro-insurgentes' element={<MB01 />} />
        <Route path='mb-jose-maria-velazco' element={<MB02 />} />
        <Route path='restaurantes' element={<RST />} />
        <Route path='sacks' element={<RST01 />} />
        <Route path='ojo-de-agua' element={<RST02 />} />
        <Route path='le-pain' element={<RST03 />} />
        <Route path='bancos' element={<BNC />} />
        <Route path='bbva' element={<BNC01 />} />
        <Route path='parkings' element={<PKN />} />
        <Route path='parking-01' element={<PKN01 />} />
      </Route>
    </Routes>
    <Routes>
      <Route exact path="/nacion-deportes" element={<NacionDeportes/>} />
    </Routes>
    <Routes>
      <Route exact path="/filtros" element={<Filtros/>} />
    </Routes>
    <Routes>
      <Route exact path="/parking" element={<Parking/>} />
    </Routes>
    <Routes>
      <Route exact path="/entretenimiento" element={<Entretenimiento/>} />
    </Routes>
    <Routes>
      <Route exact path="/juegos" element={<Juegos/>} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);
