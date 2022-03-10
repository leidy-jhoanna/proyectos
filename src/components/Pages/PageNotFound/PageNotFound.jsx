import React from 'react'
import { NavLink } from 'react-router-dom';
import { Imagen } from '../../UI/Imagen/Imagen'
import { Boton2 } from '../../UI/Boton2/Boton2'
import image2 from '../../../assets/img/404.png'

export const PageNotFound = () => {
  return (
    <>
      <section className='page_not'>
        <figure>
          <Imagen clase='image2' ruta={image2} alt='' />
        </figure>
          <p>Page not found</p>
          <NavLink to='/'><Boton2 contenido='Atras' /></NavLink>
      </section>
    </>
  )
}
