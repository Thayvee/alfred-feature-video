import { useState, React } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Header.css';

import logo from '../images/global/logos/logo-alfred.png';
import salud from '../images/global/nav-icons/icon-salud.png';
import sos from '../images/global/nav-icons/icon-sos.png';
import movilidad from '../images/global/nav-icons/icon-movilidad.png';
import filtros from '../images/global/nav-icons/icon-filtros.png';
import deportes from '../images/global/nav-icons/icon-deportes.png';
import parking from '../images/movilidad/nav-icons/icon-parking.png';

function Header() {
  const [bgOpen, setBgOpen] = useState(false);
  // const navigate = useNavigate();
  const navigateLocation = useLocation();
  const currentPath = navigateLocation.pathname;

  return (
    <div id='header' className='cntH'>
      <header className='inl'>
        <div>
          {currentPath !== '/' && 
          ( <NavLink to='/' 
          className='go-back'></NavLink>) }
        </div>
        <NavLink className={`logo relative ${currentPath === '/' ? 'active' : ''}`} to='https://uat.alf.me/'>
          <img src={logo} alt='Alfred' width='' height='' className='logo-img cntH'/>
        </NavLink>
        <div></div>
      </header>
      <nav id='navbar' className={(currentPath === '/' ? 'active ' : '') + (bgOpen ? 'open' : '') + ' nav-container'}>
        <div id='bg' className='cntH inl flex-center' onClick={e => setBgOpen(true)}>
          <span className='clr-white'>Inicio</span>
        </div>
        <div className='cntH nav-content'>
          <Swiper className="inl col-1"
            modules={[Navigation]}
            navigation={{
              nextEl: '.arrow.next',
              prevEl: '.arrow.prev',
            }}
            slidesPerView={5}
            loop={true}
          >
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/salud' onClick={e => setBgOpen(false)}>
                <img src={salud} alt='' width='' height='' className='mx-auto'/>
                <b>Salud</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/sos' onClick={e => setBgOpen(false)}>
                <img src={sos} alt='' width='' height='' className='mx-auto'/>
                <b>SOS</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/movilidad' onClick={e => setBgOpen(false)}>
                <img src={movilidad} alt='' width='' height='' className='mx-auto'/>
                <b>Movilidad</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/filtros' onClick={e => setBgOpen(false)}>
                <img src={filtros} alt='' width='' height='' className='mx-auto'/>
                <b>Filtros</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/nacion-deportes' onClick={e => setBgOpen(false)}>
                <img src={deportes} alt='' width='' height='' className='mx-auto'/>
                <b>Deportes</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/parking' onClick={e => setBgOpen(false)}>
                <img src={parking} alt='' width='' height='' className='mx-auto'/>
                <b>Parking</b>
              </NavLink>
            </SwiperSlide>
{/* cloned */}
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/salud' onClick={e => setBgOpen(false)}>
                <img src={salud} alt='' width='' height='' className='mx-auto'/>
                <b>Salud</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/sos' onClick={e => setBgOpen(false)}>
                <img src={sos} alt='' width='' height='' className='mx-auto'/>
                <b>SOS</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/movilidad' onClick={e => setBgOpen(false)}>
                <img src={movilidad} alt='' width='' height='' className='mx-auto'/>
                <b>Movilidad</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/filtros' onClick={e => setBgOpen(false)}>
                <img src={filtros} alt='' width='' height='' className='mx-auto'/>
                <b>Filtros</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/nacion-deportes' onClick={e => setBgOpen(false)}>
                <img src={deportes} alt='' width='' height='' className='mx-auto'/>
                <b>Deportes</b>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink className={({ isActive }) => (isActive ? 'active ' : '') + 'bubble clr-white inl full txt-center'}
                      to='/parking' onClick={e => setBgOpen(false)}>
                <img src={parking} alt='' width='' height='' className='mx-auto'/>
                <b>Parking</b>
              </NavLink>
            </SwiperSlide>
            <div className='arrow prev'></div>
            <div className='arrow next'></div>
          </Swiper>
          <div className='close cntH' onClick={e => setBgOpen(false)}></div>
        </div>
      </nav>
      <div className='close-nav full cnt' onClick={e => setBgOpen(false)}></div>
    </div>
  )
}

export default Header