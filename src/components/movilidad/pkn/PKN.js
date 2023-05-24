import { NavLink } from "react-router-dom";

import './PKN.css';

import mapa from '../../../images/movilidad/mapa.jpg';
import pin_pkn from '../../../images/movilidad/pins/pin-estacionamiento.png';

function Ruta() {
  return (
    <div className='full'>
      <img src={mapa} width="" height="" alt='' className='full cnt map' />
      <div>
        <NavLink className='link pkn01' to='../parking-01'>
          <img src={pin_pkn} width='' height='' alt='' className='full' />
        </NavLink>
      </div>
    </div>
  );
}

export default Ruta;
