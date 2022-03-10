import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imagen1 from '../../../assets/img/1.jpeg'

export const Main = () => {
    return (
        <>
            <main>
                <Imagen ruta={imagen1} clase='imagen1' />
            </main>
        </>
    );
};
