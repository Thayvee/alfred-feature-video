
import './AyudaEnCamino.css';

import mask from '../../../images/sos/controles-grabacion.png';

function Juegos() {
  return (
    <div className='full relative helping'>
      <div className='px'>
        <br/>
        <h2 className='txt-center h3'>Mantén la calma, <br /> la ayuda viene en camino.</h2>
      </div>
      <div className="camera relative">
        <img src={mask} alt='' width='' height='' className='full cnt'/>
        <iframe id="ayuda" src='http://localhost:9080/v1/video' className='embed' title='Deepar' />
      </div>
      <div className='px'>
        <h3 className='txt-center h5'>Toda la actividad <br/> está siendo grabada y monitoreada.</h3>
      </div>
    </div>
  );
}

export default Juegos;
