import GoBack from "../../layout/GoBack";
import './Parking.css';

import qr from '../../images/parking/qr.png';
import nfc from '../../images/parking/nfc.png';

function Parking() {
  return (
    <div id='movilidad' className="full main-container">
      <div className='px'>
        <br/><br/>
        <h2 className='txt-center h3'>Escanea el código QR, <br/>
ingresa tu placa <br/> 
completa y <br/>
paga desde tu celular <br/>
solamente por  <br/>
el tiempo que necesites.</h2>
        <br/><br/>
        <br/><br/>
        <div>
          <picture>
            <img src={qr} alt="" width="" height="" className="img-qr mx-auto"/>
          </picture>
        </div>
        <br/><br/>
        <br/><br/><br/>
        <button className='btns mx-auto'>
          <span>Pagar aquí vía NFC</span>
        </button>
        <br/><br/>
        <picture>
          <img src={nfc} alt="" width="" height="" className="apple-pay mx-auto"/>
        </picture>
      </div>

      <GoBack/>
    </div>
  );
}

export default Parking;
