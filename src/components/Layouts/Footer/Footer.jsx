import React from 'react';
import { NavLink } from 'react-router-dom';
import {Boton2 } from '../../UI/Boton2/Boton2';

export const Footer = () => {
    return(
        <>
            <footer>
                <NavLink to='/home'><Boton2 contenido='Github' /></NavLink>
                <Boton2  contenido='Twitter' />
                <Boton2  contenido='Linkedin' />
                <NavLink to='/login'><Boton2  contenido='Login' /></NavLink>
                <NavLink to='/register'><Boton2  contenido='Registro' /></NavLink>

            </footer>
        </>
    );
};
