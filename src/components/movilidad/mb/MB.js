import { NavLink } from "react-router-dom";

import './MB.css';

import mapa from '../../../images/movilidad/mapa.jpg';
import mb from '../../../images/movilidad/metrobus.png';
import pin_mb from '../../../images/movilidad/pins/pin-metrobus.png';

function Ruta() {
  return (
    <div className='full'>
      <img src={mapa} width="" height="" alt='' className='full cnt map' />

      <img src={mb} width='' height='' alt='' className='mb' data-id='01' />
      <img src={mb} width='' height='' alt='' className='mb' data-id='02' />
      <div>
        <NavLink className='link mb01' to='../mb-teatro-insurgentes'>
          <img src={pin_mb} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link mb02' to='../mb-jose-maria-velazco'>
          <img src={pin_mb} width='' height='' alt='' className='full' />
        </NavLink>
      </div>
    </div>
  );
}

export default Ruta;
