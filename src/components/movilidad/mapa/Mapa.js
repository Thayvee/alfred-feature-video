import { NavLink } from "react-router-dom";

import './Mapa.css';

import mapa from '../../../images/movilidad/mapa.jpg';
import mb from '../../../images/movilidad/metrobus.png';
import pin_mb from '../../../images/movilidad/pins/pin-metrobus.png';
import pin_rst from '../../../images/movilidad/pins/pin-restaurante.png';
import pin_bnc from '../../../images/movilidad/pins/pin-banco.png';
import pin_pkn from '../../../images/movilidad/pins/pin-estacionamiento.png';

function Mapa() {
  return (
    <div className='full relative'>
      <img src={mapa} width='' height='' alt='' className='full cnt map' />

      <img src={mb} width='' height='' alt='' className='mb' data-id='01' />
      <img src={mb} width='' height='' alt='' className='mb' data-id='02' />
      <div>
        <NavLink className='link mb01' to='mb-teatro-insurgentes'>
          <img src={pin_mb} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link mb02' to='mb-jose-maria-velazco'>
          <img src={pin_mb} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link rst01' to='sacks'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link rst02' to='ojo-de-agua'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link rst03' to='le-pain'>
          <img src={pin_rst} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link bnc01' to='bbva'>
          <img src={pin_bnc} width='' height='' alt='' className='full' />
        </NavLink>
        <NavLink className='link pkn01' to='parking-01'>
          <img src={pin_pkn} width='' height='' alt='' className='full' />
        </NavLink>
      </div>
    </div>
  );
}

export default Mapa;
