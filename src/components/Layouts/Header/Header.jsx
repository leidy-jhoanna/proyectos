import React from 'react';
import { NavLink } from 'react-router-dom';
import { Boton1  } from '../../UI/Boton1/Boton1';

export const Header = () => {
    return(
        <>
            <header>
                <NavLink to='/'><Boton1 contenido='Home' /></NavLink>
                <NavLink to='/aboutUs'><Boton1 contenido='About us' /></NavLink>
                <NavLink to='/contact'><Boton1 contenido='Contact' /></NavLink>
                <NavLink to='/contador'><Boton1 contenido='Contador' /></NavLink>
                <NavLink to='/tryUseComponent'><Boton1 contenido='Contador 2' /></NavLink>
                <NavLink to='/tryUseImage'><Boton1 contenido='Card Imagen' /></NavLink>
            </header>
        </>
    );
};
