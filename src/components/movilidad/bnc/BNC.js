import { NavLink } from "react-router-dom";

import './BNC.css';

import mapa from '../../../images/movilidad/mapa.jpg';
import pin_bnc from '../../../images/movilidad/pins/pin-banco.png';

function Ruta() {
  return (
    <div className='full'>
      <img src={mapa} width="" height="" alt='' className='full cnt map' />
      <div>
        <NavLink className='link bnc01' to='../bbva'>
          <img src={pin_bnc} width='' height='' alt='' className='full' />
        </NavLink>
      </div>
    </div>
  );
}

export default Ruta;
