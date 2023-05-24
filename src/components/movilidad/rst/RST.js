import { NavLink } from "react-router-dom";

import './RST.css';

import mapa from '../../../images/movilidad/mapa.jpg';
import pin_rst from '../../../images/movilidad/pins/pin-restaurante.png';

function Ruta() {
  return (
    <div className='full'>
      <img src={mapa} width="" height="" alt='' className='full cnt map' />
      <div>
        <NavLink className='link rst01' to='../sacks'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link rst02' to='../ojo-de-agua'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link rst03' to='../le-pain'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
      </div>
    </div>
  );
}

export default Ruta;
