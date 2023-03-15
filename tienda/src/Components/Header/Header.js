import React from 'react';
import './Header.scss';
import Buscador from './Buscador';
import Carrito from './Carrito';

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>Ropa Loca</h1>
        <nav className='header__nav'>
            <ul className='menu'>
                <li className='menu__item'>Productos</li>
                <li className='menu__item'>Ofertas</li>
                <li className='menu__item'>Ni idea</li>
                <li className='menu__item'>Locales</li>
            </ul>
        </nav>
        <Buscador/>
        <Carrito/>
    </header>
  )
}

export default Header