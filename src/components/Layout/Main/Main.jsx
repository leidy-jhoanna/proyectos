import React, { useState } from 'react'
import { H2 } from '../../UI/H2/H2'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Input } from '../../UI/Input/Input'
import { Parrafo } from '../../UI/Parrafo/Parrafo'
import rick_logo from '../../../assests/img/rick_logo.png'
import { Span } from '../../UI/Span/Span'

export const Main = () => {

    const [imagenURL, setImagenURL] = useState([])
      //TRAE Y SETEA
    const traerFetch = () => {

        const datos = document.getElementById('input')

        fetch('https://rickandmortyapi.com/api/character/?name=' + datos.value)
        .then((res) => res.json())
        .then((character) => setImagenURL(character.results))
    }

    const resultados = (evento) => {
        if(evento.keyCode===13){
            traerFetch()
        }
    }

    return (
        <>
            <main>
                <section className='section__input'>
                    <div className='container__label'>
                        <Imagen src={rick_logo} clase='img__input' />
                        <label>Search</label>
                    </div>
                    <Input place='Insert name of character' clase='input' id='input' event={resultados} />
                </section>

                <section className='section__cards'>
                        {imagenURL.map((index, key)=>{

                            return (
                                <div key={key} className='cards'>
                                    <Imagen src={index.image} clase='card__img' id='imagen' />
                                    <H2 contenido={index.name} id='titulo' clase='card__title' />
                                    <div className='info'>
                                        <Span contenido='Status' />
                                        <Parrafo contenido={index.status} id='parrafo1' clase='card__parrafo' />
                                    </div>
                                    <div className='info'>
                                        <Span contenido='Gender' />
                                        <Parrafo contenido={index.gender} id='parrafo2' clase='card__parrafo' />
                                    </div>
                                </div>
                            )
                            
                        })}
                </section>
            </main>
        </>
    )
}
