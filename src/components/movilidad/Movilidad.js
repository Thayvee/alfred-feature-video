import { useState, React } from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import GoBack from "../../layout/GoBack";
import './Movilidad.css';
import metrobus from '../../images/movilidad/nav-icons/icon-metrobus.png';
import museos from '../../images/movilidad/nav-icons/icon-museos.png';
import restaurantes from '../../images/movilidad/nav-icons/icon-restaurantes.png';
import bancos from '../../images/movilidad/nav-icons/icon-bancos.png';
import parking from '../../images/movilidad/nav-icons/icon-parking.png';


function Movilidad() {
  const [bgOpen, setBgOpen] = useState(false);
  
  return (
    <div id='movilidad' className="full relative">
      <div>
        <div className='close-nav full cnt' onClick={e => setBgOpen(false)}></div>
        <nav id='nav-movilidad' className={'nav-container' + (bgOpen ? ' open' : '')}>
          <div id='arrow'  onClick={e => setBgOpen(true)}>
            <div className='arrow prev cnt'></div>
          </div>
          <div className='nav-content'>
            <Swiper className="inl col-1"
              modules={[Navigation]}
              // navigation={{
              //   nextEl: '.arrow.next',
              //   prevEl: '.arrow.prev',
              // }}
              slidesPerView={5}
              // loop={true}
            >
              <SwiperSlide>
                <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                        to='estaciones-de-metrobus' onClick={e => setBgOpen(false)}>
                  <img src={metrobus} alt='Alfred' width='' height='' className='mx-auto'/>
                  <b>Metrobus</b>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bubble clr-white inl full txt-center' aria-disabled='true'>
                  <img src={museos} alt='Alfred' width='' height='' className='mx-auto'/>
                  <b>Museos</b>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                        to='restaurantes' onClick={e => setBgOpen(false)}>
                  <img src={restaurantes} alt='Alfred' width='' height='' className='mx-auto'/>
                  <b>Restaurantes</b>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                        to='bancos' onClick={e => setBgOpen(false)}>
                  <img src={bancos} alt='Alfred' width='' height='' className='mx-auto'/>
                  <b>Bancos</b>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                        to='parkings' onClick={e => setBgOpen(false)}>
                  <img src={parking} alt='Alfred' width='' height='' className='mx-auto'/>
                  <b>Parking</b>
                </NavLink>
              </SwiperSlide>
              {/* <div className='arrow prev'></div>
              <div className='arrow next'></div> */}
            </Swiper>
            <div className='close' onClick={e => setBgOpen(false)}></div>
          </div>
        </nav>
      </div>

      <Outlet />

      <GoBack/>
    </div>
  );
}

export default Movilidad;
